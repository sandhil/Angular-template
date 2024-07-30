import { Component, computed, DestroyRef, inject, Input } from "@angular/core";
import {
  AvatarComponent,
  BadgeComponent,
  BreadcrumbRouterComponent,
  ColorModeService,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  ProgressBarDirective,
  ProgressComponent,
  SidebarToggleDirective,
  TextColorDirective,
  ThemeDirective,
} from "@coreui/angular";
import { NgStyle, NgTemplateOutlet } from "@angular/common";
import { ActivatedRoute, RouterLink, RouterLinkActive } from "@angular/router";
import { IconDirective } from "@coreui/icons-angular";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { delay, filter, map, tap } from "rxjs/operators";

@Component({
  selector: "app-default-header",
  templateUrl: "./default-header.component.html",
  standalone: true,
  imports: [
    ContainerComponent,
    HeaderTogglerDirective,
    SidebarToggleDirective,
    IconDirective,
    HeaderNavComponent,
    NavItemComponent,
    NavLinkDirective,
    RouterLink,
    RouterLinkActive,
    NgTemplateOutlet,
    BreadcrumbRouterComponent,
    ThemeDirective,
    DropdownComponent,
    DropdownToggleDirective,
    TextColorDirective,
    AvatarComponent,
    DropdownMenuDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    BadgeComponent,
    DropdownDividerDirective,
    ProgressBarDirective,
    ProgressComponent,
    NgStyle,
  ],
})
export class DefaultHeaderComponent extends HeaderComponent {
  readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly #colorModeService = inject(ColorModeService);
  readonly colorMode = this.#colorModeService.colorMode;
  readonly #destroyRef: DestroyRef = inject(DestroyRef);

  readonly colorModes = [
    { name: "light", text: "Light", icon: "cilSun" },
    { name: "dark", text: "Dark", icon: "cilMoon" },
    { name: "auto", text: "Auto", icon: "cilContrast" },
  ];

  readonly icons = computed(() => {
    const currentMode = this.colorMode();
    return (
      this.colorModes.find((mode) => mode.name === currentMode)?.icon ??
      "cilSun"
    );
  });

  constructor() {
    super();
    this.#colorModeService.localStorageItemName.set(
      "angular-admin-template-theme-default"
    );
    this.#colorModeService.eventName.set("ColorSchemeChange");

    this.#activatedRoute.queryParams
      .pipe(
        delay(1),
        map((params) => <string>params["theme"]?.match(/^[A-Za-z0-9\s]+/)?.[0]),
        filter((theme) => ["dark", "light", "auto"].includes(theme)),
        tap((theme) => {
          this.colorMode.set(theme);
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }

  @Input() sidebarId: string = "sidebar1";

  public newMessages = [
    {
      id: 0,
      from: "Jessica Williams",
      avatar: "7.jpg",
      status: "success",
      title: "Urgent: System Maintenance Tonight",
      time: "Just now",
      link: "apps/email/inbox/message",
      message:
        "Attention team, we'll be conducting critical system maintenance tonight from 10 PM to 2 AM. Plan accordingly...",
    },
  ];

  public newNotifications = [
    {
      id: 0,
      title: "New user registered",
      icon: "cilUserFollow",
      color: "success",
    },
  ];

  public newStatus = [
    {
      id: 0,
      title: "CPU Usage",
      value: 25,
      color: "info",
      details: "348 Processes. 1/4 Cores.",
    },
  ];

  public newTasks = [{ id: 0, title: "Upgrade NPM", value: 0, color: "info" }];
}
