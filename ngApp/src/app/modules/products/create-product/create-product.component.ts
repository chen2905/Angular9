import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm:any;
  productList:any;
  lengthOfProductList:any
  constructor(private fb: FormBuilder,private productService:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.getLengthOfProductList();
    this.productForm = this.fb.group(
      {
        productName:['product name',[Validators.required]],
        categoryId:['1',[Validators.required]],
        description:['Description.......',[Validators.required]],
        productColor:['blue',[Validators.required]],
        isAvailable:[true,[Validators.required]],
        productPrice:[1500,[Validators.required]],
        views:[1,[Validators.required]]
      }
    )

  }

  getLengthOfProductList(){
    this.productService.getAllProducts().subscribe(data=>{
      this.productList = data;
      this.lengthOfProductList = Object.keys(this.productList).length
      console.log("length:" +Object.keys(this.productList).length)
    })

  }

  addProduct(){
    this.getLengthOfProductList()

    const newProduct : Product ={
      id: this.lengthOfProductList+1,
      productName:this.productForm.value.productName,
      categoryId: this.productForm.value.categoryId,
      description:this.productForm.value.description,
      rating:"great",
      price: this.productForm.value.price,
      productColor:this.productForm.value.productColor,
      productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRCSxjZPr4-8XAOyYm-0ayCnpAmi_1LUitA&usqp=CAU",
      isAvailable:this.productForm.value.isAvailable,
      views:this.productForm.value.views


    }

    this.productService.createProduct(newProduct).subscribe(data=>{
  this.router.navigate(['/products/view-all'])
    })
  }
  get f() {
    return this.productForm.controls;
  }
}
