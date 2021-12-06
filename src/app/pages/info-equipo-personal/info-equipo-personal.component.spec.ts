import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEquipoPersonalComponent } from './info-equipo-personal.component';

describe('InfoEquipoPersonalComponent', () => {
  let component: InfoEquipoPersonalComponent;
  let fixture: ComponentFixture<InfoEquipoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEquipoPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEquipoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
