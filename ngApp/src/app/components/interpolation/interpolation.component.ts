import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {


  strInterpolation:string='Interpolation is a one way databining, we define the data in ts file and display in the view/html'

  user:any ={
    id:1,
    name:'Chen Gao'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
