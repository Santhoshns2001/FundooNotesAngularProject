import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { UpdatenotesComponent } from './Components/updatenotes/updatenotes.component';
import { authGuard } from './auth.guard';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { TodoComponent } from './Components/todo/todo.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'Register',component:RegisterComponent},
  {path: 'dashboard',component:DashboardComponent, 
    canActivate:[authGuard],
    children:[
      {path:'',redirectTo:'/dashboard/getAllNotes',pathMatch:'full'},
      {path:'getAllNotes',component:GetAllNotesComponent},
      {path: 'archive', component: ArchiveComponent},
      {path:'trash',component:TrashComponent}
     
    ]
  },
  {path:'forgotpassword',component:ForgotpasswordComponent},
{path:'updatenotes',component:UpdatenotesComponent},  
{path:'todo',component:TodoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
