import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasCanchasComponent } from './nuevas-canchas.component';

describe('NuevasCanchasComponent', () => {
  let component: NuevasCanchasComponent;
  let fixture: ComponentFixture<NuevasCanchasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevasCanchasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevasCanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
