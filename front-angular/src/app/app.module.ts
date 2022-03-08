import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { ItemContainerComponent } from './components/item-container/item-container.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemInfoComponent } from './pages/item-info/item-info.component';
import { ItemRowComponent } from './components/item-row/item-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemBoxComponent,
    ItemContainerComponent,
    CarrouselComponent,
    PageContainerComponent,
    HomepageComponent,
    LoginComponent,
    LoginFormComponent,
    SignupComponent,
    SignupFormComponent,
    FooterComponent,
    ItemInfoComponent,
    ItemRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
