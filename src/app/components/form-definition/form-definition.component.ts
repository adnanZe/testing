import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-definition',
  templateUrl: './form-definition.component.html',
  styleUrls: ['./form-definition.component.css']
})
export class FormDefinitionComponent {
  // Lista de elemente pentru drag-and-drop
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  // Funcție apelată când are loc un eveniment de drag-and-drop
  drop(event: CdkDragDrop<string[]>) {
    // Rearanjează elementele în array în funcție de mutarea acestora
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
