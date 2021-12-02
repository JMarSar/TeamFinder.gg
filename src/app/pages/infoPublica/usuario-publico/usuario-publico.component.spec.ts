import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPublicoComponent } from './usuario-publico.component';

describe('UsuarioPublicoComponent', () => {
  let component: UsuarioPublicoComponent;
  let fixture: ComponentFixture<UsuarioPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
