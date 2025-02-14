import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Contact } from '../../model/contact';
import { ContactService } from '../../services/ContactServices';

@Component({
  selector: 'app-contactlist',
  standalone: false,
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css'
})
export class ContactlistComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactService: ContactService) {
    this.contacts = this.contactService.getContacts();
  }

}
