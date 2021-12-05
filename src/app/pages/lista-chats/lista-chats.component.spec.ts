import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaChatsComponent } from './lista-chats.component';

describe('ListaChatsComponent', () => {
  let component: ListaChatsComponent;
  let fixture: ComponentFixture<ListaChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaChatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
