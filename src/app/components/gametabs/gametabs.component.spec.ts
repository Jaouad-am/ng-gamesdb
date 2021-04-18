import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GametabsComponent } from './gametabs.component';

describe('GametabsComponent', () => {
  let component: GametabsComponent;
  let fixture: ComponentFixture<GametabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GametabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GametabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
