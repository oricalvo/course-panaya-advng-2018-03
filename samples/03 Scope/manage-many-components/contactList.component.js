class ContactListComponent {
    constructor(appService, appStore) {
        this.appService = appService;
        this.appStore = appStore;
    }

    get contacts() {
        return this.appStore.contacts;
    }

    onContactClicked(contact) {
        this.appService.onContactClicked(contact);
    }
}

appModule.component("appContactList", {
    controller: ContactListComponent,
    templateUrl: "contactList.component.html",
});
