import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheforderComponent } from './cheforder.component';

describe('CheforderComponent', () => {
  let component: CheforderComponent;
  let fixture: ComponentFixture<CheforderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheforderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheforderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
