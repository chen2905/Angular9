import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productForm:any;
  productId: any;
  product:Product | undefined;
    constructor(private activeRoute:ActivatedRoute,
              private productService:ProductsService,
              private fb:FormBuilder,
              private router:Router)
              { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(
      data=>{
        this.productId =data['id'];
        this.productService.viewProduct(this.productId).subscribe(
          productData =>{
            this.product=productData;

            this.productForm = this.fb.group(
              {
                productName:[this.product.productName,[Validators.required]],
                categoryId:[this.product.categoryId,[Validators.required]],
                description:[this.product.description,[Validators.required]],
                productColor:[this.product.productColor,[Validators.required]],
                isAvailable:[this.product.isAvailable,[Validators.required]],
                productPrice:[this.product.price,[Validators.required]],
                views:[this.product.views,[Validators.required]]
              }
            )
          }
        )

      }
    )


  }

  updateProduct(){
    const theProduct :Product ={
      id:  this.productId,
      productName:this.productForm.value.productName,
      categoryId: this.productForm.value.categoryId,
      description:this.productForm.value.description,
      rating:"great",
      price: this.productForm.value.productPrice,
      productColor:this.productForm.value.productColor,
      productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRCSxjZPr4-8XAOyYm-0ayCnpAmi_1LUitA&usqp=CAU",
      isAvailable:this.productForm.value.isAvailable,
      views:this.productForm.value.views
    }
console.log("form values:"+ JSON.stringify(this.productForm.value))
    this.productService.updateProduct(this.productId,theProduct).subscribe(
      data=>{
        this.router.navigate(['/products/view-all'])
      }
    )

  }

}
