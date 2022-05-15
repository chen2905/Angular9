import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  users = [
    { userId: 1, name: 'Chen Gao' },
    { userId: 2, name: 'John' },
    { userId: 3, name: 'Krishna' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
