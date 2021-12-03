import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEsportComponent } from './registro-esport.component';

describe('RegistroEsportComponent', () => {
  let component: RegistroEsportComponent;
  let fixture: ComponentFixture<RegistroEsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEsportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
