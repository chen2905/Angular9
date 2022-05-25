import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contacts: any;
  contactForm:any;
  formMessage:any;
  constructor(private contactService: ContactService,private fb:FormBuilder) {}
  addedContactResponse:any
  ngOnInit(): void {

    this.contactForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required]
    })
    this.contactService.getContactList().subscribe((data) => {
      this.contacts = data;
    });
  }

  onAddNewContact(){

    if(this.contactForm.valid){
      const contactListLength=this.contacts?.length +1
      const newContact={

        "id": contactListLength,
        "firstName": this.contactForm.value.firstName,
        "lastName":  this.contactForm.value.lastName
      }


      this.contactService.addNewContact(newContact).subscribe((data)=>{
        window.location.reload();
      })
    }else{
      this.formMessage ="invalid input"
    }

  }

  onUpdateContact(id:any){
    if(this.contactForm.valid){
       const updateContact={

        "id": id,
        "firstName": this.contactForm.value.firstName,
        "lastName":  this.contactForm.value.lastName
      }


      this.contactService.updateContact(id,updateContact).subscribe((data)=>{
        window.location.reload();
      })
    }else{
      this.formMessage ="invalid input"
    }
  }

  deleteLastContact(){
    const contactListLength=this.contacts?.length

    if (contactListLength>0){}
    this.contactService.deleteContact(contactListLength).subscribe(
      (data)=>{
        window.location.reload();
      }
    )
  }

  }

