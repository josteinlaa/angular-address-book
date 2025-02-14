import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from './contacts/contactlist/contactlist.component';
import { ContactformComponent } from './contacts/contactform/contactform.component';
import { ContactviewComponent } from './contacts/contactview/contactview.component';
import { ContacteditComponent } from './contacts/contactedit/contactedit.component';

const routes: Routes = [
  { path: 'contacts', component: ContactlistComponent },
  { path: 'contacts/add', component: ContactformComponent },
  {path: 'contacts/:id', component: ContactviewComponent},
  {path: 'contacts/edit/:id', component: ContacteditComponent},
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
