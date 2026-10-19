import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

const require = createRequire(import.meta.url);
const source = readFileSync(new URL("../src/app/api/contact/route.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
function handler({ failSave = false, failEmail = false, notifications = true } = {}) {
  const saved = [];
  const sent = [];
  const exports = {};
  const context = vm.createContext({ exports, process: { env: { RESEND_API_KEY: notifications ? "test-only" : "" } }, console: { error() {} }, require(id) {
    if (id === "@/lib/prisma") return { contactMessage: { async create(value) { if (failSave) throw new Error("database unavailable"); saved.push(value); return { id: 1 }; } } };
    if (id === "resend") return { Resend: class { emails = { async send(value) { sent.push(value); if (failEmail) throw new Error("email unavailable"); return { data: { id: "test-only" } }; } }; } };
    return require(id);
  } });
  vm.runInContext(compiled, context);
  return { post: exports.POST, saved, sent };
}
const valid = { name: "اختبار محلي", phone: "٠٥٠ ١٢٣ ٤٥٦٧", email: "test@example.com", message: "هذه رسالة اختبار محلية لا تُرسل إلى أي جهة." };
const request = data => new Request("http://localhost/api/contact", { method: "POST", body: JSON.stringify(data) });

for (const [name, value] of [
  ["rejects null", null],
  ["rejects arrays", []],
  ["rejects missing fields", {}],
  ["rejects wrong field types", { ...valid, name: {} }],
  ["rejects whitespace-only names", { ...valid, name: "   " }],
  ["rejects invalid phone", { ...valid, phone: "123" }],
  ["rejects invalid email", { ...valid, email: "invalid" }],
  ["rejects short messages", { ...valid, message: "short" }],
  ["rejects overlong messages", { ...valid, message: "x".repeat(5001) }],
]) test(name, async () => { const api = handler(); assert.equal((await api.post(request(value))).status, 400); assert.equal(api.saved.length, 0); assert.equal(api.sent.length, 0); });

test("rejects malformed JSON without a database write", async () => { const api = handler(); assert.equal((await api.post(new Request("http://localhost/api/contact", { method: "POST", body: "{" }))).status, 400); assert.equal(api.saved.length, 0); });
test("normalizes Arabic phone digits and saves exactly once", async () => { const api = handler(); assert.equal((await api.post(request(valid))).status, 201); assert.equal(api.saved.length, 1); assert.equal(api.saved[0].data.phone, "0501234567"); });
test("escapes all user content in email notifications", async () => { const api = handler(); await api.post(request({ ...valid, name: '<b>"اسم"</b>', message: '<script>alert("x")</script>\nسطر جديد' })); assert.equal(api.sent.length, 1); assert.ok(!api.sent[0].html.includes("<script>")); assert.ok(!api.sent[0].html.includes("<b>")); assert.ok(api.sent[0].html.includes("&lt;script&gt;")); assert.ok(api.sent[0].html.includes("<br />")); });
test("storage failure is recoverable and never sends email", async () => { const api = handler({ failSave: true }); assert.equal((await api.post(request(valid))).status, 503); assert.equal(api.sent.length, 0); });
test("email failure does not lose the saved message", async () => { const api = handler({ failEmail: true }); assert.equal((await api.post(request(valid))).status, 201); assert.equal(api.saved.length, 1); });
test("email configuration is optional when storage is available", async () => { const api = handler({ notifications: false }); assert.equal((await api.post(request(valid))).status, 201); assert.equal(api.sent.length, 0); });
