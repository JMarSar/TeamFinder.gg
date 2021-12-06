import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFavComponent } from './registro-fav.component';

describe('RegistroFavComponent', () => {
  let component: RegistroFavComponent;
  let fixture: ComponentFixture<RegistroFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
