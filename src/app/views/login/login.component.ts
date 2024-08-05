import { Component, OnInit } from "@angular/core";
import { NgStyle } from "@angular/common";
import { IconDirective } from "@coreui/icons-angular";
import { LocalService } from "../../local.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";

import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  TextColorDirective,
  CardComponent,
  CardBodyComponent,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective,
  SpinnerComponent,
} from "@coreui/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  standalone: true,
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardGroupComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective,
    FormControlDirective,
    ButtonDirective,
    NgStyle,
    FormsModule,
    SpinnerComponent,
    NgIf,
  ],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  constructor(private localService: LocalService, private router: Router) {
    // localService.clearData();
  }
  ngOnInit(): void {
    if (this.localService.getData("isLoggedIn") === "true") {
      this.router.navigateByUrl("home");
    }
  }

  submit() {
    // this.isLoading = true;
    this.localService.saveData("isLoggedIn", "true");
    this.router.navigateByUrl("home");
  }

  onSignUp() {
    this.router.navigateByUrl("register");
  }
}
