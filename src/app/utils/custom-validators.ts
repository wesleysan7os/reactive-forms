import { FormControl, ValidationErrors } from '@angular/forms';

export function ssnValidator(control: FormControl): ValidationErrors {
  const value = control.value || '';
  const ssnPattern = new RegExp('^\\d{9}$', 'g');
  const valid = value.match(ssnPattern);
  return valid ? null : { ssn: true };
}
