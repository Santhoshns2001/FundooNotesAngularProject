import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { TakenoteComponent } from './Components/takenote/takenote.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { IconsComponent } from './Components/icons/icons.component';
import {MatMenuModule} from '@angular/material/menu';
import { UpdatenotesComponent } from './Components/updatenotes/updatenotes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthguardService } from './Services/authguard/authguard.service';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { TodoComponent } from './Components/todo/todo.component';
import {FilterPipe}from './pipes/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    DashboardComponent,
    TakenoteComponent,
    ForgotpasswordComponent,
    GetAllNotesComponent,
    DisplaynotesComponent,
    IconsComponent,
    UpdatenotesComponent,
    ArchiveComponent,
    TrashComponent,
    TodoComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
