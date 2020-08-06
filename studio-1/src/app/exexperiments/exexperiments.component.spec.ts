import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExexperimentsComponent } from './exexperiments.component';

describe('ExexperimentsComponent', () => {
  let component: ExexperimentsComponent;
  let fixture: ComponentFixture<ExexperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExexperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExexperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
