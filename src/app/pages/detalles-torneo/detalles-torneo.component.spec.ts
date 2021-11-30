import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTorneoComponent } from './detalles-torneo.component';

describe('DetallesTorneoComponent', () => {
  let component: DetallesTorneoComponent;
  let fixture: ComponentFixture<DetallesTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
