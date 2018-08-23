import { Component, forwardRef } from '@angular/core';
import { SubForm } from '../sub-form';
import { FormBuilder, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true
    }
  ],
})

export class AddressComponent extends SubForm {

  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      street: this.fb.control('', Validators.required),
      city: this.fb.control('', Validators.required)
    });
  }

}
