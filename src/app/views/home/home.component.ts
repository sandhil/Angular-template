import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgIf } from "@angular/common";

interface City {
  id: number;
  name: string;
  population: number;
}

const CITIES: City[] = [
  {
    id: 1,
    name: "Tokyo",
    population: 37_393_000,
  },
];

@Component({
  selector: "app-home",
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, NgIf],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  showSidebar: boolean = true;
  showNavbar: boolean = true;
  showFooter: boolean = true;
  showSettings: boolean = true;

  cities: City[] = CITIES;
}
