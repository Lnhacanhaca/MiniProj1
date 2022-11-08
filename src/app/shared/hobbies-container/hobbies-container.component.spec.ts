import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesContainerComponent } from './hobbies-container.component';

describe('HobbiesContainerComponent', () => {
  let component: HobbiesContainerComponent;
  let fixture: ComponentFixture<HobbiesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
