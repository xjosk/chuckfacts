import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckFactsComponent } from './chuck-facts.component';

describe('ChuckFactsComponent', () => {
  let component: ChuckFactsComponent;
  let fixture: ComponentFixture<ChuckFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
