import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoPersonalComponent } from './equipo-personal.component';

describe('EquipoPersonalComponent', () => {
  let component: EquipoPersonalComponent;
  let fixture: ComponentFixture<EquipoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
