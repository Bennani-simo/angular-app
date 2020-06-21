import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact.model';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];
  contactSubject = new Subject<Contact[]>();

  constructor() { }

  emitContacts() {
    this.contactSubject.next(this.contacts);
  }

  saveContacts() {
    firebase.database().ref('/contacts').set(this.contacts);
  }

  getContacts() {
    firebase.database().ref('/contacts')
      .on('value', (data) => {
        this.contacts = data.val() ? data.val() : [];
        this.emitContacts();
      }
      );
  }
  getSingleContact(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/contacts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewContact(newContact: Contact) {
    this.contacts.push(newContact);
    this.saveContacts();
    this.emitContacts();
  }

  removeContact(contact: Contact) {
    const contactIndexToRemove = this.contacts.findIndex(
      (contactEl) => {
        if (contactEl === contact) {
          return true;
        }
      }
    );
    this.contacts.splice(contactIndexToRemove, 1);
    this.saveContacts();
    this.emitContacts();
  }

}
