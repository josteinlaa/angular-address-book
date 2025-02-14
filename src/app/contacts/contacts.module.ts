import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { RouterModule } from '@angular/router'; // Ensure RouterModule is imported
import { ReactiveFormsModule } from '@angular/forms';
import { ContactviewComponent } from './contactview/contactview.component';
import { ContacteditComponent } from './contactedit/contactedit.component';

@NgModule({
  declarations: [ContactformComponent, ContactlistComponent, ContactviewComponent, ContacteditComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule], // Ensure RouterModule is imported
  exports: [ContactformComponent, ContactlistComponent, ContactviewComponent, ContacteditComponent],
})
export class ContactsModule {}