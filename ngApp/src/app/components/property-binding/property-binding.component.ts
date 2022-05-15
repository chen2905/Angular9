import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }
  textColor:string='blue'
  innerText:string='[innerText]'
  placholderValue ='please enter something'
  ngOnInit(): void {
  }

}
