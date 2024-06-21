import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.scss'
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!:FormGroup;
  constructor(private user:UserService,private formbuilder:FormBuilder){}
  ngOnInit(): void {
    this.forgotForm=this.formbuilder.group({
      Email:['']
    })
    
  }

  OnForgot(){
let reqData={
  Email:this.forgotForm.value.Email
}

  }

}
