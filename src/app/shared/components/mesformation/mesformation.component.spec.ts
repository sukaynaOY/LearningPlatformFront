import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesformationComponent } from './mesformation.component';

describe('MesformationComponent', () => {
  let component: MesformationComponent;
  let fixture: ComponentFixture<MesformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
