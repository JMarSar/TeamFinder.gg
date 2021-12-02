import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFinalComponent } from './registro-final.component';

describe('RegistroFinalComponent', () => {
  let component: RegistroFinalComponent;
  let fixture: ComponentFixture<RegistroFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
