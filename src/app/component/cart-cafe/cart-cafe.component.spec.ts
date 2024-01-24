import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCafeComponent } from './cart-cafe.component';

describe('CartCafeComponent', () => {
  let component: CartCafeComponent;
  let fixture: ComponentFixture<CartCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartCafeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
