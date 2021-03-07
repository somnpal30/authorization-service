import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationProfileComponent } from './authorization-profile.component';

describe('AuthorizationProfileComponent', () => {
  let component: AuthorizationProfileComponent;
  let fixture: ComponentFixture<AuthorizationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
