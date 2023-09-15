import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosineSimilarityComponent } from './cosine-similarity.component';

describe('CosineSimilarityComponent', () => {
  let component: CosineSimilarityComponent;
  let fixture: ComponentFixture<CosineSimilarityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CosineSimilarityComponent]
    });
    fixture = TestBed.createComponent(CosineSimilarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
