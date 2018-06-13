class ContactListComponent {
    constructor() {
        console.log("ContactListComponent.ctor");

        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
            {"id": 3, "name": "Udi"},
        ];
    }

    reload() {
        this.contacts = [
            {"id": 1, "name": "OriX"},
            {"id": 2, "name": "RoniX"},
            {"id": 3, "name": "UdiX"},
        ];
    }

    edit() {
        this.contacts[0].name = "OriX";


    }
}

appModule.component("contactList", {
    controller: ContactListComponent,
    templateUrl: "contactList.component.html",
});
