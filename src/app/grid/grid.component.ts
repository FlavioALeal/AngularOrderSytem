import { 
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Grid } from '../grid';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() gridValue: Grid[] = [];

  constructor() { }

  ngOnInit() {
  }

  addGrid(input, output): void{
    this.gridValue.push({inputText: input, outputText: output});
  }

}
