import { Component, OnInit } from '@angular/core';
import{environment} from '../../environments/environment'
@Component({
  selector: 'app-staging-mode',
  templateUrl: './staging-mode.component.html',
  styleUrls: ['./staging-mode.component.css']
})
export class StagingModeComponent implements OnInit {
   modeName:any
  constructor() { }

  ngOnInit(): void {
    this.modeName =environment.modeName
  }

}
