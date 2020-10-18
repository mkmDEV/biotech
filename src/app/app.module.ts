import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeComponent} from './components/home/home.component';
import {InputFormComponent} from './components/input-form/input-form.component';
import {FormsModule} from '@angular/forms';
import {SplashScreenComponent} from './components/splash-screen/splash-screen.component';
import {FirstPageComponent} from './components/input-form/first-page/first-page.component';
import {SecondPageComponent} from './components/input-form/second-page/second-page.component';
import {ResultComponent} from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    HomeComponent,
    InputFormComponent,
    SecondPageComponent,
    SplashScreenComponent,
    ResultComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
