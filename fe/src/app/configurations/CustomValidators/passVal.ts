import { FormGroup } from '@angular/forms';

export class CustomValidators {
  static passwordMatchCheckValidator(control: FormGroup): { [s: string]: boolean } | null {
    const newPassword = control.get('newPassword')?.value;
    const newPasswordConfirm = control.get('newPasswordConfirm')?.value;
    
    if (newPassword !== newPasswordConfirm) {
      return { noMatch: true };
    }
    return null;
  }
}
