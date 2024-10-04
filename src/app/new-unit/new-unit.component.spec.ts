import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUnitComponent } from './new-unit.component';

describe('NewUnitComponent', () => {
  let component: NewUnitComponent;
  let fixture: ComponentFixture<NewUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewUnitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
