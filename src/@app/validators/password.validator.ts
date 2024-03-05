import { AbstractControl, ValidatorFn } from '@angular/forms';

export class PasswordValidator {
  static valid(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return null;
      }
      if (PasswordValidator.validPassword(control.value)) {
        return null;
      }
      return {
        valid: false,
        message:
          'A senha deve conter ao menos 8 caracteres, um número, um caractere especial e uma letra maiúscula e minúscula.',
      };
    };
  }
  static validPassword(password: string): boolean {
    const checkSpecialCharacter = false;

    const specialChar =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#])[0-9a-zA-Z!$*&@#]{8,}$/;

    if (password && password.length > 0) {
      if (!/[a-z]/g.test(password)) {
        return false;
      } else if (!/[A-Z]/g.test(password)) {
        return false;
      } else if (!/[0-9]/g.test(password)) {
        return false;
      } else if (!specialChar.test(password)) {
        if (!checkSpecialCharacter) {
          return false;
        }
      } else if (password.length < 8) {
        return false;
      }
      return true;
    }
    return true;
  }
}
