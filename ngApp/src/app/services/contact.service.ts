import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContactList(){
    return [
      {contactId:1, contactName:'Chen'},
      {contactId:2, contactName:'Lin'},
      {contactId:3, contactName:'Kayleen'},
      {contactId:4, contactName:'Ava'},

    ]

  }
}
