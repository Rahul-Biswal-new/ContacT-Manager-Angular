import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icontact } from '../models/Icontacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private static serverURL : string='http://localhost:9000';
  constructor( private http: HttpClient) { }


  getAllContacts():Observable<any>{
    let dataURL:string = `http://localhost:9000/contacts`;
    return this.http.get(dataURL);
  }

  getSingleContact(contactId: string| null):Observable<any>{
    let dataURL:string = `http://localhost:9000/contacts/${contactId}`;
    return this.http.get(dataURL);
  }

  createContact(contactObj: string):Observable<any>{
    let dataURL:string = `http://localhost:9000/contacts`;
    return this.http.post(dataURL,contactObj);
  }

  updateContact(contactObj: string, contactId:string):Observable<any>{
    let dataURL:string = `http://localhost:9000/contacts${contactId}`;
    return this.http.put(dataURL,contactObj);
  } 


  deleteContact( contactId:string):Observable<any>{
    let dataURL:string = `http://localhost:9000/contacts${contactId}`;
    return this.http.delete(dataURL);
  } 


  getAllGroups():Observable<any>{
    let dataURL:string = `http://localhost:9000/groups`;
    return this.http.get(dataURL);
  }


  getGroups(contact: Icontact):Observable<any>{
    let dataURL:string = `http://localhost:9000/groups${contact.groupId}`;
    return this.http.get(dataURL);
  }
}

