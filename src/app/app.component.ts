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
    socialSecurity: ['', ssnValidator],
    passwordGroup: this.fb.group({
      password: ['', Validators.minLength(4)],
      confirmPassword: ['']
    }),
    address: [''],
  });

  constructor(private fb: FormBuilder) {}

  hasError(control: string, error: string): boolean {
    return this.getFormControl(control).hasError(error);
  }

  hasPasswordError(control: string, error: string[]): boolean {
    return this.getNestedFormControl(control).hasError(error);
  }

  getFormControl(control: string): AbstractControl {
    return this.generalForm.controls[control];
  }

  getNestedFormControl(nestedControl: string): AbstractControl {
    return this.generalForm.controls.passwordGroup[nestedControl];
  }
}
