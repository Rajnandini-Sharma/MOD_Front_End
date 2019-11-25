import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { MentorSignInComponent } from './mentor-sign-in/mentor-sign-in.component';
import { MentorSignUpComponent } from './mentor-sign-up/mentor-sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MentorService } from './Services/mentor.service';
import { UserService } from './Services/user.service';
import { LoginService } from './Services/login.service';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { SearchService } from './Services/search.service';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AdminmentorComponent } from './adminmentor/adminmentor.component';
import { AdmintrainingComponent } from './admintraining/admintraining.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { UserboardComponent } from './userboard/userboard.component';
import { MentorboardComponent } from './mentorboard/mentorboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    SearchComponent,
    MentorSignInComponent,
    MentorSignUpComponent,
    UsersignupComponent,
    AdminboardComponent,
    AdminuserComponent,
    AdminmentorComponent,
    AdmintrainingComponent,
    AdmintechnologyComponent,
    AdminpaymentComponent,
    UserboardComponent,
    MentorboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MentorService,UserService,LoginService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
