import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTextboxComponent } from './output-textbox.component';

describe('OutputTextboxComponent', () => {
  let component: OutputTextboxComponent;
  let fixture: ComponentFixture<OutputTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
