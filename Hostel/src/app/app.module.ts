import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CreateRoomComponent } from './dashboard/create-room/create-room.component';
import { ListRoomComponent } from './dashboard/list-room/list-room.component';
import { DetailRoomComponent } from './dashboard/detail-room/detail-room.component';
import { UserCredentialsComponentComponent } from './user-credentials-component/user-credentials-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CreateRoomComponent,
    ListRoomComponent,
    DetailRoomComponent,
    UserCredentialsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
