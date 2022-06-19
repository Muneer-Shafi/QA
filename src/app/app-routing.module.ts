import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { TestComponent } from './test/test.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:'', redirectTo:'user-login', pathMatch:'full'},
 {path:'user-login', component:UserLoginComponent},
 {path:'home',component:HomeComponent},
 {path:'test',component:TestComponent},
 {path:'employee',component:EmployeeComponent},
 {path:'quiz',component:QuizComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
