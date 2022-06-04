import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  productList:any
  constructor(private productSerivce:ProductsService) { }

  ngOnInit(): void {
    this.productSerivce.getAllProducts().subscribe(data=>{
      this.productList = data
    })

  }
deleteProduct(id:any){
  this.productSerivce.deleteProduct(id).subscribe(data=>{
    window.location.reload();
  })
}
}
