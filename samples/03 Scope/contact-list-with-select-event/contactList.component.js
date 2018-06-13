class ContactListComponent {
    constructor() {
    }

    onContactClicked(contact) {
        this.onContactActivated({
            $event: contact,
        });
    }
}

appModule.component("appContactList", {
    controller: ContactListComponent,
    templateUrl: "contactList.component.html",
    bindings: {
        "contacts": "<",
        "onContactActivated": "&",
    }
});
