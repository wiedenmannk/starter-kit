import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'default-layout',
  templateUrl: './default-layout.component.html',
  styles: [],
})
export class DefaultLayoutComponent {
  @ViewChild('menu') menu?: MenuComponent;
  public menuIsOpen = true;
  public menuTitle = 'main.app-name';
  constructor() {}

  public toggle() {
    this.menuIsOpen = !this.menuIsOpen;
    if (this.menu) {
      this.menu.toggle();
    }
  }
}
