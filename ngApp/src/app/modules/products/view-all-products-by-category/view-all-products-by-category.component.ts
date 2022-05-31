import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {
  categoryId:any
  productList:any
  constructor(private productService:ProductsService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data=>{

      this.categoryId =data['id']

      this.productService.searchProductByCategory(this.categoryId).subscribe(

        cdata=>{

          this.productList = cdata
        }
      )
    })

  }

}
