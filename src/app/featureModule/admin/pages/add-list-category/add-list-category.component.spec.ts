import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListCategoryComponent } from './add-list-category.component';

describe('AddListCategoryComponent', () => {
  let component: AddListCategoryComponent;
  let fixture: ComponentFixture<AddListCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
