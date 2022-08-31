import { Component, Input } from '@angular/core';

@Component({
  selector: 'ma-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() isOpen: boolean = false;
  constructor() { }

  public toggle() {
    this.isOpen = !this.isOpen;
  }


}
