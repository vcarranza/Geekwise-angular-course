import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Contact } from "../models/contact";
import { ContactInterface } from "../interfaces/contact-interface";
import { CONTACTS } from '../contact/mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts (): Observable<ContactInterface[]>{
    return of(CONTACTS);
  }
}
