import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUsuarioPublicoComponent } from './info-usuario-publico.component';

describe('InfoUsuarioPublicoComponent', () => {
  let component: InfoUsuarioPublicoComponent;
  let fixture: ComponentFixture<InfoUsuarioPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUsuarioPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUsuarioPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
