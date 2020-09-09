import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZDialogComponent } from './z-dialog.component';

describe('ZDialogComponent', () => {
  let component: ZDialogComponent;
  let fixture: ComponentFixture<ZDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
