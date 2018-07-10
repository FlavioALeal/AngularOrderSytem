import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-output-textbox',
  templateUrl: './output-textbox.component.html',
  styleUrls: ['./output-textbox.component.css']
})
export class OutputTextboxComponent implements OnInit {
  @Input() outputValue: string = '';
  constructor() { }

  ngOnInit() {
  }

  clearOutput(): void{
    this.outputValue = '';
  }

}
