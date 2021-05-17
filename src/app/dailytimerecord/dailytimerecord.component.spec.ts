import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytimerecordComponent } from './dailytimerecord.component';

describe('DailytimerecordComponent', () => {
  let component: DailytimerecordComponent;
  let fixture: ComponentFixture<DailytimerecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailytimerecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailytimerecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
