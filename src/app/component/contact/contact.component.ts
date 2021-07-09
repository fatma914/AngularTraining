import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  simpleForm: FormGroup = new FormGroup({});

  email = new FormControl('', [Validators.required, Validators.email]);




  constructor(fb: FormBuilder) {
    this.simpleForm = fb.group({
      nameContact: 'iyadh',
      emailContact: 'zekri.iyadh@gmail.com',
      messageContact: 'Ahla Fattoumm',
      classroom1: true,
      classroom2: true,
      classroom3: false,

    });

  }

  ngOnInit(): void {
    this.simpleForm = new FormGroup({
      nameContact: new FormControl(),
      emailContact: new FormControl('', [Validators.required, Validators.email]),
      messageContact: new FormControl(),
      classroom1: new FormControl(),
      classroom2: new FormControl(),
      classroom3: new FormControl(),
      genderContact: new FormControl()
    });
    console.log(this.simpleForm);
  }

  sendData(): void {
    console.log(this.simpleForm);
    const data = {
      name: this.simpleForm.controls['nameContact'].value,
      email: this.simpleForm.controls['emailContact'].value,
      message: this.simpleForm.controls['messageContact'].value,
      classroom1:this.simpleForm.controls['classroom1'].value,
      classroom2:this.simpleForm.controls['classroom2'].value,
      classroom3:this.simpleForm.controls['classroom3'].value,
      gender: this.simpleForm.controls['genderContact'].value
    };
    console.log(data);

  }

  getErrorMessage() {
    // @ts-ignore
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}





