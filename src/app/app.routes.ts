import { Routes } from "@angular/router";
import { DefaultLayoutComponent } from "./layout";
import { HomeComponent } from "./views/home/home.component";
import { LoginActivate } from "./LoginActivate";

export const routes: Routes = [
  {
    path: "home",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    children: [
      { path: "", component: HomeComponent, canActivate: [LoginActivate] },
    ],
  },
  {
    path: "",
    loadComponent: () =>
      import("./views/login/login.component").then((m) => m.LoginComponent),
    data: {
      title: "Login Page",
    },
  },
  {
    path: "login",
    loadComponent: () =>
      import("./views/login/login.component").then((m) => m.LoginComponent),
    data: {
      title: "Login Page",
    },
  },
  {
    path: "register",
    loadComponent: () =>
      import("./views/register/register.component").then(
        (m) => m.RegisterComponent
      ),
    data: {
      title: "Register Page",
    },
  },
  { path: "**", redirectTo: "dashboard" },
];
