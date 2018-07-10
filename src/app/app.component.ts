import { Component, ViewChild } from '@angular/core';
import { InputTextboxComponent } from './input-textbox/input-textbox.component';
import { ButtonComponent } from './button/button.component';
import { OutputTextboxComponent } from './output-textbox/output-textbox.component';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('inputTextBox') inputTextBox: InputTextboxComponent;
  @ViewChild('botao') botao: ButtonComponent;
  @ViewChild('outputTextBox') outputTextbox: OutputTextboxComponent;
  @ViewChild('grid') grid: GridComponent;

  constructor(){
  }

  submitOrder(): void{
    if(this.inputTextBox.isInputValid()){
      this.addOrderToHistory(this.inputTextBox.inputValue, this.inputTextBox.outputValue);
      this.clearInputTextBox();
      this.outputTextbox.clearOutput();
    }else{
      this.outputTextbox.outputValue = this.inputTextBox.outputValue;
    }
  }

  addOrderToHistory(input, output){
    this.grid.addGrid(input,output);
  }

  clearInputTextBox(): void{
    this.inputTextBox.inputValue = '';
  }

  title = 'Teste Sorocaba';
}
