import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  @ViewChild('form') loginForm!: NgForm

  onSubmit() {
    console.log(this.loginForm);


  }

  gender:String="male"

  address!:string
  fillData(){
    this.loginForm.form.setValue({
        userData:{
          firstname:"Asim ",
          lastname:"Fayas"
        },
        email:"asim1fayas@gmail.com",
        gender:"female",
        address:"address ...."
      })
  }



}
