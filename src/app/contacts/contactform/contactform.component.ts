import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/ContactServices';
import { Contact } from '../../model/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactform',
  standalone: false,
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.css'
})
export class ContactformComponent {
  contactForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder, 
    private readonly contactService: ContactService, 
    private readonly router: Router) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  addContact(): void {
    const contact: Contact = {
      id: 0,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      address: this.contactForm.value.address,
    };
  
    this.contactService.addContact(contact);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}


