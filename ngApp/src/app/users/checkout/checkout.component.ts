import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm: any;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    // this.checkoutForm.setValue({
    //   emailField:'maxlin2905@gmail.com',
    //   quantityField:1,
    //   termField: true
    // })
    this.checkoutForm = this.fb.group({
      emailField: ['', [Validators.required, Validators.email]],
      quantityField: ['', [Validators.required]],
      termField: ['', Validators.requiredTrue],
      items: this.fb.array([
        this.fb.group({
          itemId: ['1'],
          itemName: ['item name 1'],
          itemDesc: ['item description 1'],
          itemDone: ['', Validators.requiredTrue],
        }),
      ]),
    });
    // this.checkoutForm.patchValue({
    //   emailField: 'maxlin2905@gmail.com',
    //   termField: true,
    // });

    this.display()

     }
  onSubmit() {
    console.log(this.checkoutForm.value.emailField);
    this.onReset();
  }
  onReset() {
    this.checkoutForm.reset();
  }
 display(){
  console.log('Items length:' + this.checkoutForm.value.items.length);
  console.log(
    'Items :' + JSON.stringify(this.checkoutForm.get('items')?.value)
  );
  console.log(
    'Items first :' +
      JSON.stringify(this.checkoutForm.value.items[0].itemDesc)
  );

 }
  onResetItems() {
    this.checkoutForm.get('items')?.reset();
  }

  get f() {
    return this.checkoutForm.controls;
  }

  get items() {
    return this.checkoutForm.get('items') as FormArray;
  }

  addItem(){
    const itemLength = this.items.length +1
    const newItem =this.fb.group({
      itemId: [itemLength],
      itemName: ['ss'],
      itemDesc: ['ssss'],
      itemDone: ['', Validators.requiredTrue],
    })
    this.items.push(newItem);

    this.display()
  }
  removeItemAt(index : number){
    this.items.removeAt(index)
  }


}
