import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { TeamComponent } from './team/team.component';
import { SubsComponent } from './subs/subs.component';
import { SliderComponent } from './slider/slider.component';
import { IntroComponent } from './intro/intro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MailComponent } from './mail/mail.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:IntroComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'register',component:RegisterComponent},
  {path:'clients',component:ClientsComponent},
  {path:'contact',component:ContactComponent},
  {path:'features',component:FeaturesComponent},
  {path:'services',component:ServicesComponent},
  {path:'slider',component:SliderComponent},
  {path:'subs',component:SubsComponent},
  {path:'team',component:TeamComponent},
  {path:'testimony',component:TestimonyComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'settings',component:SettingsComponent},
  {path:'MyAccount',component:MyaccountComponent},
  {path:'mail',component:MailComponent}, 
  {path:'logout',component:LogoutComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
