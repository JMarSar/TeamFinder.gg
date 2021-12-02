import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPersonalComponent } from './usuario-personal.component';

describe('UsuarioPersonalComponent', () => {
  let component: UsuarioPersonalComponent;
  let fixture: ComponentFixture<UsuarioPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
