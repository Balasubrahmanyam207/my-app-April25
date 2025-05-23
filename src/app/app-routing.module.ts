import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegtangleComponent } from './regtangle/regtangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { WeatherComponent } from './weather/weather.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { EMailComponent } from './e-mail/e-mail.component';
import { StudentComponent } from './student/student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MarksComponent } from './marks/marks.component';
import { AuthenticationGuard } from './authentication.guard';



const routes: Routes = [
  {path:'',component:LoginComponent},
  
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthenticationGuard],children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'regtangle',component:RegtangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'vehicles', component:VehiclesComponent},
    {path:'weather', component:WeatherComponent},
    {path:'createvehicle',component:CreatevehicleComponent},
    {path:'e-mail', component:EMailComponent},
    {path:'student',component:StudentComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'marks',component:MarksComponent}
  ]},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
