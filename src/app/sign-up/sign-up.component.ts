import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

 form = new FormGroup({
  username: new FormControl('', [Validators.required, Validators.minLength(5), UsernameValidators.cannotContainSpace], UsernameValidators.mustbeUnique),
  password: new FormControl('', Validators.required),
  address: new FormGroup({
    doorNumber: new FormControl(),
    city: new FormControl('', Validators.required),
    state: new FormControl()
  })
});

login() {
  this.form.setErrors({
    invalidLogin: true
  });
}

get username() {
  return this.form.get('username');
}

get password() {
  return this.form.get('password');
}

get doorNumber() {
  return this.form.get('address.doorNumber');
}

get city() {
  return this.form.get('address.city');
}

get state() {
  return this.form.get('address.state');
}

}

export class UsernameValidators {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if((control.value as string).indexOf(' ') != -1) {
      return { cannotContainSpace: true};
    }  
    return null;
  }

  static mustbeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value as String === 'ktsunkara') {
          resolve ({mustbeUnique: true}); 
        } else {
          resolve (null);
        }
      }, 2000);
    })
  }

}
