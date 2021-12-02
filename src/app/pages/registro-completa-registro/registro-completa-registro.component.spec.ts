import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCompletaRegistroComponent } from './registro-completa-registro.component';

describe('RegistroCompletaRegistroComponent', () => {
  let component: RegistroCompletaRegistroComponent;
  let fixture: ComponentFixture<RegistroCompletaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCompletaRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCompletaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
