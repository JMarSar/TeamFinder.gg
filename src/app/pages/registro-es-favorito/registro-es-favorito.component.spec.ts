import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEsFavoritoComponent } from './registro-es-favorito.component';

describe('RegistroEsFavoritoComponent', () => {
  let component: RegistroEsFavoritoComponent;
  let fixture: ComponentFixture<RegistroEsFavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEsFavoritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEsFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
