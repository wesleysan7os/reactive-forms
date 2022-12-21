import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { ssnValidator } from './utils/custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  generalForm = this.fb.group({
    name: ['', Validators.required],
    ssn: ['', ssnValidator],
    email: [''],
    address: [''],
  });

  constructor(private fb: FormBuilder) {}

  hasError(control: string, error: string): boolean {
    return this.getFormControl(control).hasError(error);
  }

  getFormControl(control: string): AbstractControl {
    return this.generalForm.controls[control];
  }
}
