import { FormGroup } from '@angular/forms';

export class CustomValidators {
  static checkIfBlankValidator(control: FormGroup): { [s: string]: boolean } | null {
    const controlValue = control.value;

    if (controlValue !== null && controlValue.trim() !== controlValue && controlValue.trim() === '') {
      return { blank: true };
    }
    
    return null;
  }

  static notBlankValidator(control: FormGroup): { [s: string]: boolean } | null {
    const controlValue = control.value;

    if (controlValue === null || controlValue.trim() === '') {
      return { blank: true };
    }
    
    return null;
  }
}
