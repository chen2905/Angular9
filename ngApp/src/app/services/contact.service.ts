import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient :HttpClient) { }

  getContactList(){

    return this.httpClient.get("http://localhost:3000/contacts")
    // return [
    //   {contactId:1, contactName:'Chen'},
    //   {contactId:2, contactName:'Lin'},
    //   {contactId:3, contactName:'Kayleen'},
    //   {contactId:4, contactName:'Ava'},

    // ]

  }
  addNewContact(newContact:any){
return this.httpClient.post("http://localhost:3000/contacts",newContact)
  }
}
