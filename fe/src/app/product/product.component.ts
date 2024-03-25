import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import the necessary forms modules
import { CartService } from '../services/cart.service';
import { Product, ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product | null = null;
  selectedQuantity: number = 1;
  form !: FormGroup; 
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private fb: FormBuilder 
  ) {
    this.form = this.fb.group({
      quantity: [1, Validators.min(1)], 
    });
  }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.productService.getProductById(productId)
      .subscribe(
        (product: Product) => {
          this.product = product;
        },
        (error) => {
          console.error('Error fetching product details:', error);
        }
      );
  }

  addToCart(productId: number) {
    const quantity = this.form.get('quantity')?.value;

    this.productService.addToCart(productId, quantity).subscribe(
      () => {
        alert("Product added to cart.");
        window.location.reload();
      },
      (error: any) => {
        console.error('Error adding product to cart:', error);
      }
    );
  }
}
