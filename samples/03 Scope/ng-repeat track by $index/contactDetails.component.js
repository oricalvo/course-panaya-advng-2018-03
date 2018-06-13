class ContactDetailsComponent {
    constructor() {
        console.log("ContactDetailsComponent.ctor");

    }

    $onChanges() {
        console.log("$onChanges");

        // this.length = this.contact.name.length;
        // this.extra = "";
    }

    get length() {
        return this.contact.name.length;
    }

    $onInit() {
    }

    $onDestroy() {
        console.log("ContactListComponent.dtor");
    }
}

appModule.component("contactDetails", {
    controller: ContactDetailsComponent,
    templateUrl: "contactDetails.component.html",
    bindings: {
        "contact": "<",
    }
});
