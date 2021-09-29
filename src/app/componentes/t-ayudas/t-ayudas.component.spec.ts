import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAyudasComponent } from './t-ayudas.component';

describe('TAyudasComponent', () => {
  let component: TAyudasComponent;
  let fixture: ComponentFixture<TAyudasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAyudasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TAyudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
