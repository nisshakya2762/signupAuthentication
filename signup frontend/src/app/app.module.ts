import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'Login', component:  SignupComponent},
      { path: '', redirectTo: 'Login', pathMatch: 'full' },
      {path: 'profile', component: ProfileComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
