import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseConfigItemComponent } from './house-config-item.component';

describe('HouseConfigItemComponent', () => {
  let component: HouseConfigItemComponent;
  let fixture: ComponentFixture<HouseConfigItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseConfigItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseConfigItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
