import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/ContactServices';

@Component({
  selector: 'app-contactview',
  standalone: false,
  templateUrl: './contactview.component.html',
  styleUrl: './contactview.component.css'
})
export class ContactviewComponent {
  contact: Contact | null = null;
  contactId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.getContactById(this.contactId).subscribe((data) => {
      this.contact = data!;
    });
  }
}
