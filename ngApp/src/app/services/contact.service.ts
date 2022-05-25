import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  httpHeaders:any

  constructor(private httpClient: HttpClient) {

     this.httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Banana124$',
        })

       // customer headers
       this.httpHeaders=this.httpHeaders.set('cgHeader',"Thanks God")

  }

  getContactList() {



    return this.httpClient.get('http://localhost:3000/contacts',{headers:this.httpHeaders});

  }

  getContactById(id:any){
    const httpParams = new HttpParams({
      fromObject:{
        id:id
      }
    })

    return this.httpClient.get('http://localhost:3000/contacts',{headers:this.httpHeaders,params:httpParams});

  }
  addNewContact(newContactBody: any) {

    return this.httpClient.post('http://localhost:3000/contacts', newContactBody, {
      headers: this.httpHeaders,
    });
  }

  updateContact(id:any,updateContactBody: any) {
    const httpHeaders = new HttpHeaders();
    //httpHeaders.append('content-type', 'appliation/json');
    return this.httpClient.put('http://localhost:3000/contacts/'+id, updateContactBody,{headers:this.httpHeaders});
  }

  deleteContact(id:any) {
    const httpHeaders = new HttpHeaders();
    //httpHeaders.append('content-type', 'appliation/json');
    return this.httpClient.delete('http://localhost:3000/contacts/'+id,{headers:this.httpHeaders});
  }
}
