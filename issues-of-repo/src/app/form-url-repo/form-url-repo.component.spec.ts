import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUrlRepoComponent } from './form-url-repo.component';

describe('FormUrlRepoComponent', () => {
  let component: FormUrlRepoComponent;
  let fixture: ComponentFixture<FormUrlRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUrlRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUrlRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
