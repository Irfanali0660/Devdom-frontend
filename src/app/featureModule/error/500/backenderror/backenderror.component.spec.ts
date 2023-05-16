import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackenderrorComponent } from './backenderror.component';

describe('BackenderrorComponent', () => {
  let component: BackenderrorComponent;
  let fixture: ComponentFixture<BackenderrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackenderrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackenderrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
