import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObesityListComponent } from './obesity-list.component';

describe('ObesityListComponent', () => {
  let component: ObesityListComponent;
  let fixture: ComponentFixture<ObesityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObesityListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObesityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
