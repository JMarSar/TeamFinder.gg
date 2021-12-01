import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarScrimComponent } from './buscar-scrim.component';

describe('BuscarScrimComponent', () => {
  let component: BuscarScrimComponent;
  let fixture: ComponentFixture<BuscarScrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarScrimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarScrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
