import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTasktoRowComponent } from './add-taskto-row.component';

describe('AddTasktoRowComponent', () => {
  let component: AddTasktoRowComponent;
  let fixture: ComponentFixture<AddTasktoRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTasktoRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTasktoRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
