import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  loginForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    number: new FormControl('',[Validators.required]),
    message: new FormControl('',[Validators.required])
  })

  get name(){
    return this.loginForm.get('name');
  }
  get email(){
    return this.loginForm.get('email');
  }
  get number(){
    return this.loginForm.get('number');
  }
  get message(){
    return this.loginForm.get('message');
  }
}
