import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameterized-route',
  templateUrl: './parameterized-route.component.html',
  styleUrls: ['./parameterized-route.component.css']
})
export class ParameterizedRouteComponent implements OnInit {

  constructor(private _activeRoute:ActivatedRoute) { }

  paramId: string =""
  paramName:string =""
  ngOnInit(): void {

    this._activeRoute.params.subscribe(data=>{
      this.paramId=data['id'],
  this.paramName =data['name']
    })
  }

}
