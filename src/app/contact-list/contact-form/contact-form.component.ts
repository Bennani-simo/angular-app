import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../models/Contact.model';
import { ContactService } from "../../services/contact.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactsService: ContactService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      mail: ['', Validators.required],
    });
  }

  onSaveContact() {
    const name = this.contactForm.get('name').value;
    const mail = this.contactForm.get('mail').value;
    const newContact = new Contact(name, mail);
    this.contactsService.createNewContact(newContact);
    this.router.navigate(['/contacts']);
  }

  onBack() {
    this.router.navigate(['/contacts']);
  }

}
