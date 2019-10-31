import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseFloorComponent } from './house-floor.component';

describe('HouseFloorComponent', () => {
  let component: HouseFloorComponent;
  let fixture: ComponentFixture<HouseFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
