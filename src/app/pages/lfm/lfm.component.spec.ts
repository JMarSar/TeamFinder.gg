import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfmComponent } from './lfm.component';

describe('LfmComponent', () => {
  let component: LfmComponent;
  let fixture: ComponentFixture<LfmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LfmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
