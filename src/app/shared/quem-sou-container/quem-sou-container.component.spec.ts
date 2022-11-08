import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemSouContainerComponent } from './quem-sou-container.component';

describe('QuemSouContainerComponent', () => {
  let component: QuemSouContainerComponent;
  let fixture: ComponentFixture<QuemSouContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuemSouContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuemSouContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
