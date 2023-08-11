import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IntroComponent } from './intro/intro.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { SliderComponent } from './slider/slider.component';
import { SubsComponent } from './subs/subs.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiTabComponent } from './api-tab/api-tab.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { SettingsComponent } from './settings/settings.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MailComponent } from './mail/mail.component';
import { LogoutComponent } from './logout/logout.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IntroComponent,
    ServicesComponent,
    FeaturesComponent,
    TeamComponent,
    ClientsComponent,
    TestimonyComponent,
    SliderComponent,
    SubsComponent,
    FooterComponent,
    ContactComponent,
    DashboardComponent,
    ApiTabComponent,
    SettingsComponent,
    MyaccountComponent,
    MailComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
  ],
  providers: [
    ApiService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi   : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
