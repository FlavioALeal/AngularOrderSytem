import { 
  Component,
  OnInit,
  Input
} from '@angular/core';
import { MOCK_DISHES } from '../mock-dishes';
import { DishRequest } from '../dish-request'

@Component({
  selector: 'app-input-textbox',
  templateUrl: './input-textbox.component.html',
  styleUrls: ['./input-textbox.component.css']
})

export class InputTextboxComponent implements OnInit {
  @Input() inputValue: string = '';
  outputValue: string = '';

  private MORNING_STR: string = 'morning';
  private NIGHT_STR: string = 'night';

  actualRequest: DishRequest[] = [];
  isError: boolean = false;
  orderLabel: string = "Order: ";
 
  constructor() { }

  ngOnInit() {
  }

  isInputValid(): boolean{
    this.isError = false;
    this.clearOutput();
    this.clearActualRequest();
    let inputArray = this.inputValue.split(',');

    if(!this.isValidArray(inputArray))return false;
    if(!this.isPeriodValid(inputArray[0]))return false;
    if(!this.isValidDishes(inputArray))return false;
    this.createOutputText();
    if(this.isError){
      return this.showError();
    }
    return true;
  }

  isPeriodValid(value): boolean{
    const val = this.cleanValue(value);
    if(val === this.MORNING_STR || val === this.NIGHT_STR){
      return true;
    }
    return this.showError();
  }

  isValidArray(inputArray): boolean{
    if (inputArray.length > 1) {
      return true;
    }
    return this.showError();
  }

  isValidDishes(values): boolean{
    let period;
    values.map((item, index) => {
      if(this.isError)return false;
      if(index == 0)period = values[0];
      if(index > 0){
        let val = this.cleanValue(item);
        if(!this.isNumeric(val)){
          this.isError = true;
          return false;
        }
        if(!this.isValidDish(val, period, index))return false;
      }
    });
    
    return true;
  }

  cleanValue(value){
    let val = value.trim();
    val = val.toLowerCase();
    return val;
  }

  isValidDish(val, period, i): boolean {
    let validDish = MOCK_DISHES.find((item) => (item.id == val && item.period == period));
    if(validDish){
      if(this.actualRequest){
        let requestDishExists = this.actualRequest.find((item) => (item.id == val && item.period == period));
        if(requestDishExists){
          if(requestDishExists.multiple){
            requestDishExists.amount++;
            return true;
          }
          this.isError = true;
          return false;
        }else{
          this.addDishToRequest(validDish, 1);
          return true;
        }
      }else{
        this.addDishToRequest(validDish, 1);
        return true;
      }
    }else{
      this.isError = true;
      return false;
    }
  }

  createOutputText(){
    this.actualRequest
      .sort((a, b) =>{
        return a.id - b.id;
      })
      .map((item, index) => {
        if(index > 0)this.outputValue += ", ";
        this.outputValue += item.name;
        if(item.amount > 1)this.outputValue += `(${item.amount}x)`;
    });
  }

  addErrorToOutput(){
    if(this.outputValue.length > 0)this.outputValue += ", ";
    this.outputValue += "error";
  }

  isNumeric(n): boolean{
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  clearOutput(): void{
    this.outputValue = '';
  }

  clearActualRequest(): void{
    this.actualRequest = [];
  }

  addDishToRequest(dish, amount){
    const d = this.convertToActualRequest(dish, amount);
    this.actualRequest.push(d);
  }

  convertToActualRequest(dish, amount): DishRequest{
    return { 'id': dish.id, 'name': dish.name, 'multiple': dish.multiple, 'period': dish.period, 'amount': amount};
  }

  showError(): boolean{
    this.isError = true;
    this.addErrorToOutput();
    return false;
  }
}
