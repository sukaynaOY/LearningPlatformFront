import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherformationComponent } from './chercherformation.component';

describe('ChercherformationComponent', () => {
  let component: ChercherformationComponent;
  let fixture: ComponentFixture<ChercherformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChercherformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
