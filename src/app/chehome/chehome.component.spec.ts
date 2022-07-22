import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChehomeComponent } from './chehome.component';

describe('ChehomeComponent', () => {
  let component: ChehomeComponent;
  let fixture: ComponentFixture<ChehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
