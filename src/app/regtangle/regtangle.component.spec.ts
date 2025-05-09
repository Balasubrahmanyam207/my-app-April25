import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegtangleComponent } from './regtangle.component';

describe('RegtangleComponent', () => {
  let component: RegtangleComponent;
  let fixture: ComponentFixture<RegtangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegtangleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegtangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
