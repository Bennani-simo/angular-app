import { Component, OnDestroy, OnInit } from '@angular/core';

import { Contact } from '../models/Contact.model';

import { ContactService } from '../services/contact.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  contactsSubscription: Subscription;

  constructor(private contactsService: ContactService, private router: Router) { }

  ngOnInit() {
    this.contactsSubscription = this.contactsService.contactSubject.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );
    this.contactsService.getContacts();
    this.contactsService.emitContacts();
  }

  onNewContact() {
    this.router.navigate(['/contacts', 'new']);
  }

  onDeleteContact(contact: Contact) {
    this.contactsService.removeContact(contact);
  }

  onViewContact(id: number) {
    this.router.navigate(['/contacts', 'view', id]);
  }

  ngOnDestroy() {
    this.contactsSubscription.unsubscribe();
  }
}