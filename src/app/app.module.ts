import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NavbarComponent } from './sharepage/navbar/navbar.component';
//import { FooterComponent } from './sharepage/footer/footer.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BasicLoginComponent } from './auth/login/basic-login/basic-login.component';

//import { BasicLoginComponent } from './login/basic-login/basic-login.component';
//import { AuthComponent } from './auth/auth.component';
//import { SignupComponent } from './pages/signup/signup.component';
//import { TaskComponent } from './pages/task/task.component';
//import { UserComponent } from './pages/user/user.component';
//import { userinfoComponent } from './pages/userinfo/userinfo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
     TaskComponent,
     BasicLoginComponent,
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,

    BrowserAnimationsModule,

    MatToolbarModule,

    MatButtonModule,

    MatListModule,

    MatIconModule,

    MatCardModule,

    MatGridListModule,

    MatDialogModule,


    MatFormFieldModule,

    MatInputModule,

    MatCheckboxModule,

    FormsModule,

    ReactiveFormsModule,

    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }