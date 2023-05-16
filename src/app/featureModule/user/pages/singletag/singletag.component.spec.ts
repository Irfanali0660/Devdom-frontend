import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletagComponent } from './singletag.component';

describe('SingletagComponent', () => {
  let component: SingletagComponent;
  let fixture: ComponentFixture<SingletagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
