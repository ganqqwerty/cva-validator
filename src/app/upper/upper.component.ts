import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.css']
})
export class UpperComponent implements OnInit {

  form: FormGroup;
  get addresses () {
    return this.form.controls.addresses as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      addresses: this.fb.array([])
    });
  }

  ngOnInit() {
  }

  addAddress() {
    this.addresses.push(this.fb.control(''));
  }

}
