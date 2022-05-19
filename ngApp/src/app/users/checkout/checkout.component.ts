import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm:FormGroup
  constructor(private fb:FormBuilder) {
    this.checkoutForm=this.fb.group( {
      emailField: new FormControl(),
      quantityField:new FormControl(),
      termField:new FormControl()
    })


   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.checkoutForm.value)
  }
}
