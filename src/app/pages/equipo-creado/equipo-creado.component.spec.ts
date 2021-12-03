import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoCreadoComponent } from './equipo-creado.component';

describe('EquipoCreadoComponent', () => {
  let component: EquipoCreadoComponent;
  let fixture: ComponentFixture<EquipoCreadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoCreadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoCreadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
