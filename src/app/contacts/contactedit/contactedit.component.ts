import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/ContactServices';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contactedit',
  standalone: false,
  templateUrl: './contactedit.component.html',
  styleUrl: './contactedit.component.css'
})
export class ContacteditComponent implements OnInit {
  contactEditForm: FormGroup;
  contactId: number | null = null;

  constructor(
    private readonly formBuilder: FormBuilder, 
    private readonly contactService: ContactService, 
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.contactEditForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.contactId = Number(params.get('id'));
      if (this.contactId) {
        this.contactService.getContactById(this.contactId).subscribe(contact => {
          if (contact) {
            this.contactEditForm.patchValue(contact);
          }
        });
      }
    });
  }

  updateContact(): void {
    if (this.contactEditForm.valid && this.contactId !== null) {
      const updatedContact: Contact = {
        id: this.contactId,
        firstName: this.contactEditForm.value.firstName,
        lastName: this.contactEditForm.value.lastName,
        address: this.contactEditForm.value.address
      };
      this.contactService.updateContact(updatedContact); 
      this.router.navigate(['/contacts']);
    }
  }
}
