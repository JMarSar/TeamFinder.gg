import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormasTorneoComponent } from './normas-torneo.component';

describe('NormasTorneoComponent', () => {
  let component: NormasTorneoComponent;
  let fixture: ComponentFixture<NormasTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormasTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormasTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
