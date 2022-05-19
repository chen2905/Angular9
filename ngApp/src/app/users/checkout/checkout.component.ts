import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm:FormGroup
  constructor(private fb:FormBuilder) {
    this.checkoutForm=this.fb.group( {
      emailField: ['',[Validators.required,Validators.email]],
      quantityField: ['',[Validators.required]],
      termField: ['',Validators.requiredTrue],
    })


   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.checkoutForm.value)
  }
  get f(){
    return this.checkoutForm.controls
  }
}
