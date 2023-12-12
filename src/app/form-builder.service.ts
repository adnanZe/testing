import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormItem } from './item-model';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  private itemsSubject = new BehaviorSubject<FormItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  // Add an additional property to store the currently dragged item
  private draggedItemIndex: number | null = null;

  // Method to start the drag operation
  startDrag(index: number) {
    this.draggedItemIndex = index;
  }

  // Method to end the drag operation
  endDrag() {
    this.draggedItemIndex = null;
  }

  // Method to handle the drop operation
  drop(event: CdkDragDrop<string[]>) {
    if (this.draggedItemIndex !== null) {
      const items = this.itemsSubject.value;
      moveItemInArray(items, this.draggedItemIndex, event.currentIndex);
      this.itemsSubject.next([...items]);
      this.endDrag();
    }
  }
}
