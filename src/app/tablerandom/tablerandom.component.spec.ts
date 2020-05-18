import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerandomComponent } from './tablerandom.component';

describe('TablerandomComponent', () => {
  let component: TablerandomComponent;
  let fixture: ComponentFixture<TablerandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablerandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablerandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
