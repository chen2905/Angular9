import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fromEvent, Observable, debounceTime, filter } from 'rxjs';
@Component({
  selector: 'app-rxjs-debounce-time-operator',
  templateUrl: './rxjs-debounce-time-operator.component.html',
  styleUrls: ['./rxjs-debounce-time-operator.component.css'],
})
export class RxjsDebounceTimeOperatorComponent implements OnInit {
  rxjsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rxjsForm = this.fb.group({
      txtNoDebounce: [''],
      txtYesDebounce: [''],
      txtFilter: [''],
    });
  }
  txtNoDebounceDisplay: any;
  txtYesDebounceDisplay: any;
  txtFilterDisplay: any;

  ngOnInit(): void {
    this.rxjsForm.get('txtNoDebounce')?.valueChanges.subscribe((data) => {
      this.txtNoDebounceDisplay = data;
    });

    this.rxjsForm
      .get('txtYesDebounce')
      ?.valueChanges.pipe(debounceTime(2000))
      .subscribe((data) => {
        this.txtYesDebounceDisplay = data;
      });

    this.rxjsForm
    .get('txtFilter')
    ?.valueChanges.pipe(filter((v)=>this.lessThan(v,5)))
    .subscribe(data=>{
      this.txtFilterDisplay = data
    })

  }

  lessThan(iValue:string,iLength:number){
    return iValue.length<iLength?true:false;
  }
}
