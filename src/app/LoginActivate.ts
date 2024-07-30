import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { LocalService } from "./local.service";

@Injectable({
  providedIn: "root",
})
export class LoginActivate {
  constructor(private router: Router, private localService: LocalService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.localService.getData("isLoggedIn") !== "true") {
      this.router.navigate(["login"]);
    }
    return true;
  }
}
