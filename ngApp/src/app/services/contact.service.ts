import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  getContactList() {
    return this.httpClient.get('http://localhost:3000/contacts');
    // return [
    //   {contactId:1, contactName:'Chen'},
    //   {contactId:2, contactName:'Lin'},
    //   {contactId:3, contactName:'Kayleen'},
    //   {contactId:4, contactName:'Ava'},

    // ]
  }
  addNewContact(newContactBody: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'appliation/json');
    return this.httpClient.post('http://localhost:3000/contacts', newContactBody, {
      headers: httpHeaders,
    });
  }

  updateContact(id:any,updateContactBody: any) {
    const httpHeaders = new HttpHeaders();
    //httpHeaders.append('content-type', 'appliation/json');
    return this.httpClient.put('http://localhost:3000/contacts/'+id, updateContactBody);
  }

  deleteContact(id:any) {
    const httpHeaders = new HttpHeaders();
    //httpHeaders.append('content-type', 'appliation/json');
    return this.httpClient.delete('http://localhost:3000/contacts/'+id);
  }
}
