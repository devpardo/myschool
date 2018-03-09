import { User } from "./user";
import { AuthService } from "@app/auth.service";
import { AuthGuard } from "@app/auth.guard";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "@app/app.component";
import { DefaultLayoutComponent } from "@app/default-layout/default-layout.component";
import { DashboardComponent } from "@app/dashboard/dashboard.component";
import { RegisterComponent } from "@app/register/register.component";
import { HomeComponent } from "@app/home/home.component";
import { AuthLayoutComponent } from "@app/auth-layout/auth-layout.component";
import { LoginComponent } from "@app/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    AuthLayoutComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AuthGuard, User],
  bootstrap: [AppComponent]
})
export class AppModule {}
