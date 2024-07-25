import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example3ioComponent } from './example3io.component';

describe('Example3ioComponent', () => {
  let component: Example3ioComponent;
  let fixture: ComponentFixture<Example3ioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example3ioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example3ioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
