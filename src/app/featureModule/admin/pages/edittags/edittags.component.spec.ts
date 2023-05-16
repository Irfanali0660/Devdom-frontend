import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittagsComponent } from './edittags.component';

describe('EdittagsComponent', () => {
  let component: EdittagsComponent;
  let fixture: ComponentFixture<EdittagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
