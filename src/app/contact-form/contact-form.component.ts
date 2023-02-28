import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = ["Email", "Phone"];

  paymentTypes = ["Net Banking", "UPI", "Debit Card", "Cash On Delivery"];

   log(data:any) {
    console.log(data);
  } 

  onSubmit(f:any) {
    console.log(f);
    console.log(f.value);
  }

}
