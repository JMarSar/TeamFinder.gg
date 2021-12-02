import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoPublicoComponent } from './equipo-publico.component';

describe('EquipoPublicoComponent', () => {
  let component: EquipoPublicoComponent;
  let fixture: ComponentFixture<EquipoPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
