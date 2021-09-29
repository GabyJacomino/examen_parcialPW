import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAyudasComponent } from './registro-ayudas.component';

describe('RegistroAyudasComponent', () => {
  let component: RegistroAyudasComponent;
  let fixture: ComponentFixture<RegistroAyudasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroAyudasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAyudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
