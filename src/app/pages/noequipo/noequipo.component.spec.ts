import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOequipoComponent } from './noequipo.component';

describe('NOequipoComponent', () => {
  let component: NOequipoComponent;
  let fixture: ComponentFixture<NOequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NOequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NOequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
