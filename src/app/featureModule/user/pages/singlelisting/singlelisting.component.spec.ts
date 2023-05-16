import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglelistingComponent } from './singlelisting.component';

describe('SinglelistingComponent', () => {
  let component: SinglelistingComponent;
  let fixture: ComponentFixture<SinglelistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglelistingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
