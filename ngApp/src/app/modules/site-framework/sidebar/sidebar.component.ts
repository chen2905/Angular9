import { Component, NgIterable, OnInit } from '@angular/core';
import { Category } from '../../products/interfaces/category';
import { ProductsService } from '../../products/services/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // categoryList:NgIterable<Category>|undefined
  categoryList:any
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe(data=>{
      this.categoryList = data
    })
  }

}
