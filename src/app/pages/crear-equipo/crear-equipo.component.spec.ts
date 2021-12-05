import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEquipoComponent } from './crear-equipo.component';

describe('CrearEquipoComponent', () => {
  let component: CrearEquipoComponent;
  let fixture: ComponentFixture<CrearEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
