import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultchatbgComponent } from './defaultchatbg.component';

describe('DefaultchatbgComponent', () => {
  let component: DefaultchatbgComponent;
  let fixture: ComponentFixture<DefaultchatbgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultchatbgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultchatbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
