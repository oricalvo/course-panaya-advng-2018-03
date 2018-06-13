class RootComponent {
    constructor(appStore) {
        this.appStore = appStore;
    }

    get contacts() {
        return this.appStore.contacts;
    }
}

appModule.component("appRoot", {
    controller: RootComponent,
    templateUrl: "app.component.html",
});
