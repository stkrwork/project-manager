import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveViewComponent } from './archive-view.component';

describe('ArchiveViewComponent', () => {
  let component: ArchiveViewComponent;
  let fixture: ComponentFixture<ArchiveViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
