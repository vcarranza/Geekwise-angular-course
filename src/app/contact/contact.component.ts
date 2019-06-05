import { Component, OnInit, OnDestroy } from '@angular/core';

import { ContactInterface } from '../interfaces/contact-interface';
import { ContactService } from '../services/contact.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private contactService: ContactService) { }

  contacts: ContactInterface[];

  setContacts(): Subscription {
     return this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  } 

  ngOnInit() {
    this.setContacts();
  }

  ngOnDestroy(){
    this.setContacts().unsubscribe();
  }

}
