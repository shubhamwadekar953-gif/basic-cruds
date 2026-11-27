import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttwoComponent } from './studenttwo.component';

describe('StudenttwoComponent', () => {
  let component: StudenttwoComponent;
  let fixture: ComponentFixture<StudenttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenttwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
