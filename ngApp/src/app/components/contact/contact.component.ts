import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts:any
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
this.contactService.getContactList().subscribe(data=>{
  this.contacts = data
})
  }

}
