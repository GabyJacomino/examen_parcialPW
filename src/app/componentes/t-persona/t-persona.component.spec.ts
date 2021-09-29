import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPersonaComponent } from './t-persona.component';

describe('TPersonaComponent', () => {
  let component: TPersonaComponent;
  let fixture: ComponentFixture<TPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
