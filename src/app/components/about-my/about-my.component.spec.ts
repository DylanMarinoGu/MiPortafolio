import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyComponent } from './about-my.component';

describe('AboutMyComponent', () => {
  let component: AboutMyComponent;
  let fixture: ComponentFixture<AboutMyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AboutMyComponent]
    });
    fixture = TestBed.createComponent(AboutMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
