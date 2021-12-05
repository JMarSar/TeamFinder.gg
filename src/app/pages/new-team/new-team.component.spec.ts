import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeamComponent } from './new-team.component';

describe('NewTeamComponent', () => {
  let component: NewTeamComponent;
  let fixture: ComponentFixture<NewTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
