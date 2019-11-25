import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from './search/search.component';
import {MentorSignInComponent} from './mentor-sign-in/mentor-sign-in.component';
import {MentorSignUpComponent} from './mentor-sign-up/mentor-sign-up.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { AdminmentorComponent } from './adminmentor/adminmentor.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AdmintrainingComponent } from './admintraining/admintraining.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { UserboardComponent } from './userboard/userboard.component';
import { MentorboardComponent } from './mentorboard/mentorboard.component';



const routes: Routes = [
  {path: 'contact',component:ContactComponent},
  { path: 'search', component: SearchComponent },
  { path: 'usersignup', component: UsersignupComponent },
  { path: 'mentor-sign-in', component: MentorSignInComponent },
  { path: 'mentorsignup', component: MentorSignUpComponent },
  {path: 'adminboard',component: AdminboardComponent,children:[
    {path:'adminuser',component:AdminuserComponent},
    {path:'adminmentor',component:AdminmentorComponent},
    {path:'adminuser',component:AdminmentorComponent},
    {path:'admintraining',component:AdmintrainingComponent},
    {path:'admintechnology',component:AdmintechnologyComponent},
    {path:'adminpayment',component:AdminpaymentComponent},
  ]},
  {path:'userboard',component:UserboardComponent},
  {path:'mentorboard',component:MentorboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
