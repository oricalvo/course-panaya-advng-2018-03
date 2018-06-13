import { Component } from '@angular/core';
import {Contact} from './contact-details/contact-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];

  constructor() {
    this.contacts = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        {"id": 3, "name": "Udi"}
    ];
  }

  onContactDelete(contact: Contact) {
    console.log("onContactDelete", contact);

    const index = this.contacts.indexOf(contact);
    if(index != -1) {
      this.contacts.splice(index, 1);
    }
  }
}

