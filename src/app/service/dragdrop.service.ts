import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DragdropService {
  public dropBox?: HTMLElement | null;
  public containers: HTMLElement[] = [];
  public container?: HTMLElement | null;
  constructor() {}

  public clear() {
    this.dropBox = null;
  }

  public cloneHTML() {}

  public saveHTML(e: HTMLElement) {
    console.log('attributes', e.attributes);
    console.log(e.attributes.length);
    for (let i = 0; i < e.attributes.length; i++) {
      console.log('attribute', e.attributes.item(i));
    }
    console.log('styles', e.style);
  }

  public checkArgs(...args: any[]) {
    console.log(args);
  }
}
