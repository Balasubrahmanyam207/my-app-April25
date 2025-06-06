import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMailComponent } from './e-mail.component';

describe('EMailComponent', () => {
  let component: EMailComponent;
  let fixture: ComponentFixture<EMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
