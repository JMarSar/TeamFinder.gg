import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaDetalleComponent } from './partida-detalle.component';

describe('PartidaDetalleComponent', () => {
  let component: PartidaDetalleComponent;
  let fixture: ComponentFixture<PartidaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
