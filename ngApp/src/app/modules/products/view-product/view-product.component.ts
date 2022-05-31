import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId:any
  product:any
  constructor(private activeRoute:ActivatedRoute,private productService:ProductsService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data=>{
      this.productId = data['id']
      this.productService.viewProduct(this.productId).subscribe(pdata=>{
        this.product=pdata
      })
    })
  }

}
