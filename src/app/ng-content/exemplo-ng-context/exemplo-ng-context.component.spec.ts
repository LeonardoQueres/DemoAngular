import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgContextComponent } from './exemplo-ng-context.component';

describe('ExemploNgContextComponent', () => {
  let component: ExemploNgContextComponent;
  let fixture: ComponentFixture<ExemploNgContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploNgContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploNgContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
