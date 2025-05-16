import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegtangleComponent } from './regtangle/regtangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';
import { DeveloperComponent } from './developer/developer.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import {HttpClientModule} from '@angular/common/http';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { WeatherComponent } from './weather/weather.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { EMailComponent } from './e-mail/e-mail.component';
import { StudentComponent } from './student/student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MarksComponent } from './marks/marks.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ErrorComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RegtangleComponent,
    CircleComponent,
    BMIComponent,
    DirectivesComponent,
    EmployeesComponent,
    DeveloperComponent,
    VehiclesComponent,
    FlipkartComponent,
    WeatherComponent,
    CreatevehicleComponent,
    EMailComponent,
    StudentComponent,
    CreateUserComponent,
    MarksComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
