import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example3childComponent } from './example3child.component';

describe('Example3childComponent', () => {
  let component: Example3childComponent;
  let fixture: ComponentFixture<Example3childComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example3childComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example3childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
