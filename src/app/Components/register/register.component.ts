import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  hide=true;
  RegisterForm!:FormGroup;
  constructor(private user:UserService,private formbuilder:FormBuilder){}
ngOnInit(): void {
  this.RegisterForm=this.formbuilder.group({
    firstname:[''],
    lastname:[''],
    email:[''],
    password:[''],
    confirmpassword:['']
  })
 
}
OnRegister(){
  let data={
      firstname:this.RegisterForm.value.firstname,
      lastname:this.RegisterForm.value.lastname,
      email:this.RegisterForm.value.email,
      password:this.RegisterForm.value.password
  }
  if(data.password === this.RegisterForm.value.confirmpassword)
    {
  this.user.register(data).subscribe((res:any)=>{
    console.log(res);
  })
}
else{
  alert('password mismatch');
}

}

}

