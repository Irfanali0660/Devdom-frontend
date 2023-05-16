import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportpostComponent } from './reportpost.component';

describe('ReportpostComponent', () => {
  let component: ReportpostComponent;
  let fixture: ComponentFixture<ReportpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
