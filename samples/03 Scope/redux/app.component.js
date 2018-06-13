class RootComponent {
    constructor($scope) {
        console.log($scope);
    }

    get counter() {
        return store.getState().counter;
    }

    inc() {
        store.dispatch({
            type: "INC",
        });
    }

    dec() {
        store.dispatch({
            type: "DEC",
        });
    }

    stam() {
    }
}

appModule.component("appRoot", {
    controller: RootComponent,
    templateUrl: "app.component.html",
});
