import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormItem } from './item-model';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sectionComponent = new FormItem('section', 'Section', true, []);
  textComponent = new FormItem('text', 'Text', true, []);
  checkboxComponent = new FormItem('checkbox', 'Checkbox', true, []);

  @ViewChild('droppedElements') droppedElements: ElementRef = new ElementRef(null);

  test: any = []

  drop(event: CdkDragDrop<FormItem>) {
    //i want to check droppedPoint if is inside droppedElements

    if (event.dropPoint.x < this.droppedElements.nativeElement.offsetLeft || event.dropPoint.x > this.droppedElements.nativeElement.offsetLeft + this.droppedElements.nativeElement.offsetWidth) {
      return;
    }

    if (this.test.length > 0) {
      this.test[0].children.push(event.container.data);
    }
    else {
      this.test.push(event.container.data);
    }
  }
}
