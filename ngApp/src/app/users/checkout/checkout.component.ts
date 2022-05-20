import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators, FormArray } from '@angular/forms';

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
      items:this.fb.array(
        [
          this.fb.group(
            {
              itemId:[1],
              itemName:['item name 1'],
              itemDesc:['item description 1'],
              itemDone:['',Validators.requiredTrue]
            }
          )
        ]
      )
    })


   }

  ngOnInit(): void {

// this.checkoutForm.setValue({
//   emailField:'maxlin2905@gmail.com',
//   quantityField:1,
//   termField: true
// })

this.checkoutForm.patchValue({
  emailField:'maxlin2905@gmail.com',
  termField: true
})

this.checkoutForm.get('emailField')?.valueChanges.subscribe(
  data=>{
    console.log('current email value:'+data)
  }
)

this.checkoutForm.get('emailField')?.statusChanges.subscribe(
  data=>{
    console.log('current email status:'+data)
  }
)

this.checkoutForm?.statusChanges.subscribe(
  data=>{
    console.log('current form status:'+data)
  }
)



  }
  onSubmit(){
    console.log(this.checkoutForm.value.emailField)
    this.onReset()
  }
  onReset(){
    this.checkoutForm.reset()
  }
  get f(){
    return this.checkoutForm.controls
  }
  get items() {
    return this.checkoutForm.get("items") as FormArray  ;
}
}
