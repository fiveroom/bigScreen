import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeListComponent } from './scree-list.component';

describe('ScreeListComponent', () => {
  let component: ScreeListComponent;
  let fixture: ComponentFixture<ScreeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
