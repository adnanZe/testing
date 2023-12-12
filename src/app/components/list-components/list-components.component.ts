import { Component } from '@angular/core';
import { FormBuilderService } from 'src/app/form-builder.service';

@Component({
  selector: 'app-list-components',
  templateUrl: './list-components.component.html',
  styleUrls: ['./list-components.component.css']
})
export class ListComponentsComponent {

  constructor(private formBuilderService: FormBuilderService) { }

  startDrag(component: any) {
    let dataDragged: any = {};
    switch (component) {
      case "section":
        dataDragged = {
          type: "section",
          // label: "Section",
          // isVisible: true,
          children: []
        }
        break;
      case "text-field":
        dataDragged = {
          type: "input",
          label: "Input",
          isVisible: true,
          children: []
        }
        break;
      case "checkbox":
        dataDragged = {
          type: "checkbox",
          label: "Checkbox",
          isVisible: true,
          children: []
        }
        break;
    }

    this.formBuilderService.startDrag(dataDragged);
  }

  endDrag() {
    this.formBuilderService.endDrag();
  }
}
