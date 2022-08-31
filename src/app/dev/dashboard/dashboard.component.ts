import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import { DragdropService } from '@service/dragdrop.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dropBox: HTMLElement | null = null;
  dragObject: HTMLElement | null = null;
  isDragging: boolean = false;

  constructor(private dd: DragdropService) {
    // dd.checkArgs(this.isDragging, this.dragObject);
  }

  ngOnInit(): void {
    setTimeout(() => {
      document.addEventListener('drop', function (event) {
        console.log('js drop');
        event.preventDefault();
      });
    }, 100);
  }

  @HostListener('document:dragstart', ['$event'])
  dragStart(event: DragEvent) {
    // event.preventDefault();
    console.log('dragStart Host');
    const item = event.target as HTMLElement;
    this.isDragging = true;
    item.style.opacity = '1';
    console.log(event.target);
  }

  @HostListener('document:drag', ['$event'])
  drag(event: DragEvent) {
    // console.log("drag");
    const item = event.target as HTMLElement;
    this.dragObject = item;
    // item.style.border = "1px solid black";
    item.style.backgroundColor = '#898989';
  }

  @HostListener('document:dragend', ['$event'])
  dragEnd(event: DragEvent) {
    console.log('dragend');
    if (this.dropBox) {
      console.log(event.target);

      const clone = this.dragObject?.cloneNode(true) as HTMLElement;
      this.dropBox.appendChild(clone);
      this.dd.saveHTML(clone);
      console.log('nodes', this.dropBox.childNodes);
    } else {
      console.log('object has no container... has left');
    }
    this.dragObject = null;
  }

  @HostListener('document:drop', ['$event'])
  dropEvent(event: DragEvent) {
    console.log('drop');
    event.preventDefault();
  }

  /**
   * DragLeave gives you the target where you dragover
   * */
  @HostListener('document:dragleave', ['$event'])
  dragLeave(event: DragEvent) {
    console.log('dragleave');
    console.log(event.target);
  }

  public start(event: any, item: HTMLElement) {
    console.log('start', event);
    console.log('startItem', item);
    this.dragObject = item;
    this.isDragging = true;
  }

  public end(event: DragEvent) {
    console.log('end', event);

    console.log('push me to container');
    console.log('childnodes', this.dropBox?.hasChildNodes());
    const i = this.dropBox?.childNodes.length;
    console.log('index', i);
    if (i) {
      console.log(this.dropBox?.childNodes[i]);
    }
    // this.dragObject = null;
    this.isDragging = false;
  }

  public handleDrop(event: any) {
    console.log('drop', event);
    event.preventDefault;
  }

  public onDragLeave(event: any) {
    console.log('leave', event);
  }

  public setBox(event: DragEvent) {
    if (this.dropBox !== event.target) {
      // this.dropBox = event.target;
      console.log('catch dropBox', event.target);
    }
  }

  public killBox() {
    console.log('killBox');
    this.dropBox = null;
  }

  public checkItem(event: any) {
    console.log('check', event);
    event.preventDefault;
  }

  public exit(event: any) {
    console.log('exit', event);
  }

  public setDropBoxForHTML(event: DragEvent, item: HTMLElement) {
    if (this.dropBox !== item) {
      this.dropBox = item;
      console.log('item', item);
    }
  }

  public onDrag($event: any) {
    this.isDragging = true;
  }

  public checkForDrop(event: any) {
    setTimeout(() => {
      if (this.isDragging) {
        console.log('has left');
        this.dropBox = null;
        // return false;
      }
    }, 5);
  }
}
