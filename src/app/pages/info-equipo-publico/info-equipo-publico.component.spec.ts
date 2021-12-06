import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEquipoPublicoComponent } from './info-equipo-publico.component';

describe('InfoEquipoPublicoComponent', () => {
  let component: InfoEquipoPublicoComponent;
  let fixture: ComponentFixture<InfoEquipoPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEquipoPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEquipoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
