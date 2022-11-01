import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticelComponent } from './articel.component';

describe('ArticelComponent', () => {
  let component: ArticelComponent;
  let fixture: ComponentFixture<ArticelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
