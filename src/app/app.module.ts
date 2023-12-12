import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponentsComponent } from './components/list-components/list-components.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
