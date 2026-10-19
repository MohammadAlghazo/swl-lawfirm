import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { SignJWT } from "jose/jwt/sign";

const base = process.argv[2] || "http://localhost:3001";
const results = [];
async function check(name, work) { await work(); results.push({ name, passed: true }); console.log(`PASS ${name}`); }
const routes = ["/", "/about", "/services", "/services/corporate", "/services/individual", "/team", "/blog", "/contact"];
for (const path of routes) await check(`public route ${path}`, async () => {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.equal((html.match(/<main\b/g) || []).length, 1);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.ok(html.includes('property="og:title"'));
  assert.ok(html.includes('property="og:description"'));
  assert.ok(html.includes('rel="canonical"'));
  assert.ok(!html.includes('name="robots" content="noindex"'));
});
await check("both service sectors are in the sitemap", async () => { const response = await fetch(`${base}/sitemap.xml`); assert.equal(response.status, 200); const xml = await response.text(); assert.ok(xml.includes("/services/corporate")); assert.ok(xml.includes("/services/individual")); });
await check("missing article returns 404", async () => { const response = await fetch(`${base}/blog/__verification-missing-article__`); assert.equal(response.status, 404); });
await check("contact rejects malformed and invalid requests", async () => { for (const body of ["{", "null", "{}", JSON.stringify({ name: {}, phone: [], message: {} })]) { const response = await fetch(`${base}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body }); assert.equal(response.status, 400); } });
await check("admin rejects absent, arbitrary and legacy-signed sessions", async () => {
  const legacy = await new SignJWT({ id: 1, email: "test@example.com" }).setProtectedHeader({ alg: "HS256" }).setExpirationTime("1h").sign(new TextEncoder().encode("super-secret-key-for-swl-lawfirm"));
  for (const token of ["", "invalid-token", legacy]) { const response = await fetch(`${base}/admin/messages`, { redirect: "manual", headers: token ? { Cookie: `session=${token}` } : {} }); assert.equal(response.status, 307); assert.ok(response.headers.get("location")?.endsWith("/admin/login")); }
});
await check("admin APIs reject forged sessions", async () => { const response = await fetch(`${base}/api/articles`, { method: "POST", headers: { "Content-Type": "application/json", Cookie: "session=invalid-token" }, body: "{}" }); assert.equal(response.status, 401); });
await writeFile(new URL("../artifacts/http-verification.json", import.meta.url), JSON.stringify({ base, results }, null, 2));
