import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormItem } from './item-model';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  private itemsSubject = new BehaviorSubject<FormItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  startDrag(data: string) {
    // this.draggedItemIndex = index;
    console.log(data);

  }

  endDrag() {
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
