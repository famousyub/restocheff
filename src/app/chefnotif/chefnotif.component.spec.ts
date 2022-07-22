import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefnotifComponent } from './chefnotif.component';

describe('ChefnotifComponent', () => {
  let component: ChefnotifComponent;
  let fixture: ComponentFixture<ChefnotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefnotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
