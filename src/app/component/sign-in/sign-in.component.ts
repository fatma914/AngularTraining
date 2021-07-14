import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  //loginForm: FormGroup = new FormGroup({});

  log_email: any;
  reg_email: string = '';
  reg_password: string = '';
  reg_confirm_password: string = '';
   email: string = '';
   password: string = '';


  constructor(private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
  }

  login() : void{
    if(this.email ==='admin' && this.password === 'admin'){
      // @ts-ignore
     // this.snackBar.open('Login Successful','',{duration:1000})
      this.router.navigate(['component']);
    }else{
      // @ts-ignore
      this.snackBar.open('Login error','',{duration:1000})
    }
  }

  Register() :void {
    if(this.reg_email !== '' && this.reg_password !=='' && this.reg_password === this.reg_confirm_password){
      // @ts-ignore
      this.snackBar.open('Register Successful','',{duration:1000})
    }else{
      // @ts-ignore
      this.snackBar.open('Register error','',{duration:1000})
    }
  }
}
