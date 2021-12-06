import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUsuarioPersonalComponent } from './info-usuario-personal.component';

describe('InfoUsuarioPersonalComponent', () => {
  let component: InfoUsuarioPersonalComponent;
  let fixture: ComponentFixture<InfoUsuarioPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUsuarioPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUsuarioPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
