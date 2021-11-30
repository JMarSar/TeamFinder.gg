import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionPartidaComponent } from './seleccion-partida.component';

describe('SeleccionPartidaComponent', () => {
  let component: SeleccionPartidaComponent;
  let fixture: ComponentFixture<SeleccionPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionPartidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
