class RootComponent {
    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
            {"id": 3, "name": "Udi"}
        ];

        this.clockFormat = "ss";
    }

    changeFormat() {
        this.clockFormat = "HH:mm:ss";
    }
}

appModule.component("appRoot", {
    controller: RootComponent,
    templateUrl: "app.component.html",
});
