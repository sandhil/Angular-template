import { Component } from "@angular/core";
import { NgStyle } from "@angular/common";
import { IconDirective } from "@coreui/icons-angular";
import { LocalService } from "../../local.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

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
  FormModule,
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
  ],
})
export class LoginComponent {
  constructor(private localService: LocalService, private router: Router) {
    console.log("inside login--");
  }

  submit() {
    this.localService.saveData("isLoggedIn", "true");
    this.router.navigateByUrl("home");
  }

  onSignUp() {
    this.router.navigateByUrl("register");
  }
}
