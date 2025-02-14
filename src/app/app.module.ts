import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Ensure RouterModule is imported
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';
import { LayoutModule } from "./layout/layout.module";
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ContactsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]), // Ensure RouterModule is configured
    LayoutModule,
    AppRoutingModule // Add AppRoutingModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }