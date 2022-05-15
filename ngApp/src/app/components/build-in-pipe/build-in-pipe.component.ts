import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-in-pipe',
  templateUrl: './build-in-pipe.component.html',
  styleUrls: ['./build-in-pipe.component.css']
})
export class BuildInPipeComponent implements OnInit {

  constructor() { }
  user:any ={
    firstname:"Chen",
    lastname:"Gao",
    DOB:"1980-05-29",
    salary:"116000"
  }
  ngOnInit(): void {
  }

}
