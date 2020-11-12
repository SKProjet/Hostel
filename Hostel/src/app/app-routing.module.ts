import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CreateRoomComponent } from './dashboard/create-room/create-room.component';
import { ListRoomComponent} from './dashboard/list-room/list-room.component';
import { DetailRoomComponent} from './dashboard/detail-room/detail-room.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // faire avec guardActive
  { path: 'dashboard/create', component: CreateRoomComponent },
  { path: 'dashboard/list', component: ListRoomComponent },
  { path: 'dashboard/detail:id', component: DetailRoomComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
