class AppService {
    constructor(appStore) {
        this.appStore = appStore;
    }

    onContactClicked(contact) {
        contact.selected = !contact.selected;
    }

    addContact(newName) {
        if(!newName) {
            return;
        }

        const contact = {
            id: this.appStore.nextId--,
            name: newName,
        }

        this.appStore.contacts.push(contact);
    }
}

appModule.service("appService", AppService);
