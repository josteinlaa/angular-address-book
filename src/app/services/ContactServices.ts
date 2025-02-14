import { Injectable } from "@angular/core";
import { Contact } from "../model/contact";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    contacts: Contact[] = [
        {id: 1, firstName: 'John', lastName: 'Doe', address: '123 Elm St'},
        {id: 2, firstName: 'Jane', lastName: 'Smith', address: '456 Oak St'}
    ];

    getContacts(): Contact[] {
        return this.contacts;
    }

    getContactById(id: number): Observable<Contact | undefined> {
        const contact = this.contacts.find(contact => contact.id === id);
        return of(contact);
    }

    addContact(contact: Contact) {
        contact.id = this.contacts.length + 1;
        this.contacts.push(contact);
    }

    updateContact(updatedContact: Contact): void {
        const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
        if (index !== -1) {
            if (updatedContact.firstName) {
                this.contacts[index].firstName = updatedContact.firstName;
            }
            if (updatedContact.lastName) {
                this.contacts[index].lastName = updatedContact.lastName;
            }
            if (updatedContact.address) {
                this.contacts[index].address = updatedContact.address;
            }
        } else {
            console.error('Contact not found');
        }
    }
}