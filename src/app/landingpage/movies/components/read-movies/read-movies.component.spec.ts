import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoviesComponent } from './read-movies.component';

describe('ReadMoviesComponent', () => {
  let component: ReadMoviesComponent;
  let fixture: ComponentFixture<ReadMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
