import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onDelete: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
  }

  remove() {
    this.onDelete.emit(this.contact);
  }
}

export interface Contact {
  id: number;
  name: string;
}
