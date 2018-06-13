class ContactListComponent {
    constructor() {
    }

    $onInit() {
        this.contactsVM = this.contacts.map(c => {
            return {
                ... c,
                selected: false,
            };
        });
    }

    onContactClicked(contact) {
        contact.selected = !contact.selected;

        this.onContactSelectionChanged({
            $event: contact,
        });
    }
}

appModule.component("appContactList", {
    controller: ContactListComponent,
    templateUrl: "contactList.component.html",
    bindings: {
        "contacts": "<",
        "onContactSelectionChanged": "&",
    }
});
