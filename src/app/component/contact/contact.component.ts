import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  simpleForm: FormGroup = new FormGroup({});

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
  }

  ngOnInit(): void {
    this.simpleForm = new FormGroup({
      nameContact : new FormControl(),
      emailContact : new FormControl('', [Validators.required, Validators.email]),
      messageContact: new FormControl()
    });
    console.log(this.simpleForm);
  }

  sendData(): void {
    console.log(this.simpleForm);
    const data = {
      name : this.simpleForm.controls['nameContact'].value,
      email : this.simpleForm.controls['emailContact'].value,
      message : this.simpleForm.controls['messageContact'].value,
    }
    console.log(data);

  }


  getErrorMessage() {
    // @ts-ignore
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }






  //updateName() {
   //this.name.setValue('');
 // }


}



