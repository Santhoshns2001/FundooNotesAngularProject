import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit{
  Loginform!:FormGroup;
  constructor(private user:UserService,private formbuilder:FormBuilder){}
  ngOnInit(): void {
   this.Loginform=this.formbuilder.group({
    Email:[''],
    password:['']
   })
  }
  OnLogin(){
    let data={
      Email:this.Loginform.value.Email,
      password:this.Loginform.value.password
    }
    this.user.login(data).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('token',res.data);
    })
  }

}
