import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Action } from '@ngrx/store';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LandingComponent } from './components/landing/landing.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { authReducer, State, RegisterReducer } from './store/reducers/auth.reducers';
import { AuthService } from './services/auth.services';
import { AuthEffects } from './store/effects/auth.effects';
import { User } from 'src/app/models/user';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent,
    
  ],
  imports: [

BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    StoreModule.forRoot({auth : RegisterReducer}),
    EffectsModule.forRoot([AuthEffects]),
    RouterModule.forRoot([
      { path: 'log-in', component: LogInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', component: LandingComponent },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
