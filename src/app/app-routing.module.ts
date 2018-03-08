import { AuthGuard } from "@app/auth.guard";
import { DefaultLayoutComponent } from "@app/default-layout/default-layout.component";
import { AuthLayoutComponent } from "app/auth-layout/auth-layout.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "@app/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      { path: "", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  },
  {
    path: "dashboard",
    component: AuthLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
