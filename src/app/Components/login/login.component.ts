import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit{
  Loginform!:FormGroup;
  constructor(private user:UserService,private formbuilder:FormBuilder, private router:Router){}
  ngOnInit(): void {
   this.Loginform=this.formbuilder.group({
    Email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required]]

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
      this.router.navigateByUrl('/dashboard/getAllNotes')
     // sessionStorage.setItem('token',res.data);
    })
  }

}
