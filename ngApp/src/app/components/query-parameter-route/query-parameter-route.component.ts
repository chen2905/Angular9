import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-parameter-route',
  templateUrl: './query-parameter-route.component.html',
  styleUrls: ['./query-parameter-route.component.css']
})
export class QueryParameterRouteComponent implements OnInit {

  constructor(private _activeRouter:ActivatedRoute) { }
  paramName: string =""
  paramCountry:string =""
  ngOnInit(): void {

    this._activeRouter.queryParams.subscribe(data=>{
      this.paramName=data['name'],
      this.paramCountry =data['country']
    })

  }
}
