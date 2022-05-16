import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private _activeRoute:ActivatedRoute) { }
   productId: string=""
  ngOnInit(): void {

    this._activeRoute.params.subscribe(data=>{
      this.productId=data['id'];
    })
  }

}
