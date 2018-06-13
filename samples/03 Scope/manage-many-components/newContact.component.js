class NewContactComponent {
    constructor(appService) {
        this.newName = "";
        this.appService = appService;
    }

    add() {
        this.appService.addContact(this.newName);
    }
}

appModule.component("appNewContact", {
    controller: NewContactComponent,
    templateUrl: "newContact.component.html",
});
