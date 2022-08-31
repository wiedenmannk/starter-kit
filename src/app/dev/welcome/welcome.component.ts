import { Component, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from "@angular/router";

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnDestroy {

  items: MenuItem[] = [
    {
      label: "Dashboard",
      icon: "pi pi-pencil",
      routerLink: "dashboard",
      command: (event?: any) => {
        this.showMessage = false;
      },
    },
    {
      label: "Drag&Drop",
      icon: "pi pi-arrow-down",
      routerLink: "dragdrop",
      command: (event?: any) => {
        this.showMessage = false;
      },
    }
  ];

  public showMessage = true;
  constructor(private router: Router) {
    if(router.url !== "/dev") {
      this.showMessage = false;
    }
  }

  ngOnDestroy() {
    this.showMessage = true;
  }

}
