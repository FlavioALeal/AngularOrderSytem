import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputTextboxComponent } from './input-textbox/input-textbox.component';
import { OutputTextboxComponent } from './output-textbox/output-textbox.component';
import { ButtonComponent } from './button/button.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextboxComponent,
    OutputTextboxComponent,
    ButtonComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
