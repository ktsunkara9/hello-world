import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent {

  constructor(private fb: FormBuilder) {

  }

  form = this.fb.group({
    oldPassword:this.fb.control('',[Validators.required], [PasswordValidators.invalidOldPassword]),
    newPassword:this.fb.control('',[Validators.required]),
    confirmPassword:this.fb.control('',[Validators.required])
  }, {validator: [PasswordValidators.oldAndNewPasswordsAreSame, PasswordValidators.passwordsNotMatching]});

  changePassword() {
    console.log(this.oldPassword.value);
    console.log(this.newPassword.value);
    console.log(this.confirmPassword.value);
    console.log(this.form);
    if(this.oldPassword.value === this.newPassword.value)
      console.log(this.confirmPassword.errors)
    
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }
 
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}

export class PasswordValidators {

  static invalidOldPassword(control: AbstractControl) : Promise<ValidationErrors| null> {
    return new Promise((resolve) => {
      if(control.value === '123')
        resolve({invalidOldPassword:true});
      else
        resolve(null);
    });
  }

  static oldAndNewPasswordsAreSame(control:AbstractControl): ValidationErrors | null {
      if(control.get('oldPassword').value === control.get('newPassword').value)
        return {oldAndNewPasswordsAreSame : true};
      else
        return null;
  }

  static passwordsNotMatching(control: AbstractControl): ValidationErrors | null {
      if(control.get('newPassword').value !== control.get('confirmPassword').value)
        return {passwordsNotMatching: true}
      return null;
  }
}
