import type { FormEvent } from "react";

export function validateAdminForm(event: FormEvent<HTMLFormElement>, errorId: string): string | null {
  const controls = Array.from(event.currentTarget.elements).filter((element): element is HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement => element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement);
  let firstInvalid: typeof controls[number] | undefined;
  for (const control of controls) {
    if (!control.willValidate) continue;
    const invalid = !control.validity.valid;
    control.setAttribute("aria-invalid", String(invalid));
    if (invalid) { control.setAttribute("aria-describedby", errorId); firstInvalid ??= control; }
    else if (control.getAttribute("aria-describedby") === errorId) control.removeAttribute("aria-describedby");
  }
  if (!firstInvalid) return null;
  firstInvalid.focus();
  if (firstInvalid.validity.valueMissing) return "يرجى تعبئة جميع الحقول المطلوبة.";
  if (firstInvalid.validity.typeMismatch) return "تحقق من صيغة البريد الإلكتروني أو الرابط المدخل.";
  if (firstInvalid.validity.tooShort && "minLength" in firstInvalid) return `يجب إدخال ${firstInvalid.minLength} أحرف على الأقل.`;
  return "تحقق من البيانات المشار إليها ثم حاول مجدداً.";
}
