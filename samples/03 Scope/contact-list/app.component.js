class RootComponent {
    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
            {"id": 3, "name": "Udi"}
        ];

        this.newName = "";
    }

    dump() {
        console.log(this.contacts);
    }

    onContactSelectionChanged($event) {
        console.log("Contact changed", $event);
    }

    add() {
        if(!this.newName) {
            return;
        }

        const contact = {
            id: -1,
            name: this.newName,
        }

        this.contacts.push(contact);
    }
}

appModule.component("appRoot", {
    controller: RootComponent,
    templateUrl: "app.component.html",
});
