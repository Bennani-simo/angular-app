import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/Contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from "../../services/contact.service";

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss']
})
export class SingleContactComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute, private contactsService: ContactService,
    private router: Router) { }

  ngOnInit() {
    this.contact = new Contact('', '');
    const id = this.route.snapshot.params['id'];
    this.contactsService.getSingleContact(+id).then(
      (contact: Contact) => {
        this.contact = contact;
      }
    );
  }

  onBack() {
    this.router.navigate(['/contacts']);
  }
}