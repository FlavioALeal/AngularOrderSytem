import { 
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() apagaTexto: EventEmitter<any> = new EventEmitter();
  buttonText: string = "send order";
  
  constructor() { }

  ngOnInit() {
  }

  sendOrder(): void {
    this.apagaTexto.emit();
  }

}
