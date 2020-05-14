import { Directive } from '@angular/core';
import { Validator, FormGroup } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
})
export class LocationValidatorDirective implements Validator {
  constructor() {}

  validate(formGroup: FormGroup): { [key: string]: any } {
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['address'];
    // Fancy syntax to go up to root element in template and then grab the onlineUrl input control reference
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      return null; // returning null tells validation system that this value is PASSING
    } else {
      return { validateLocation: false }; // return object used to throw custom validation error in template
    }
  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
