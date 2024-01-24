import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCafeComponent } from './detail-cafe.component';

describe('DetailCafeComponent', () => {
  let component: DetailCafeComponent;
  let fixture: ComponentFixture<DetailCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCafeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
