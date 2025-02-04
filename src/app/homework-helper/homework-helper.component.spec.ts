import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkHelperComponent } from './homework-helper.component';

describe('HomeworkHelperComponent', () => {
  let component: HomeworkHelperComponent;
  let fixture: ComponentFixture<HomeworkHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeworkHelperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeworkHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
