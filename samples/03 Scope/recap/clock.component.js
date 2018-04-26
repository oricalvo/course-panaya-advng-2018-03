class ClockComponent {
    constructor($interval) {
        this.time = new Date();
        this.calcFormat = "HH:mm:ss";

        $interval(() => {
            this.time = new Date();
        }, 1000);
    }

    $onInit() {
        console.log("$onInit");
    }

    $onChanges(changes) {
        console.log("$onChanges", changes);
        this.calcFormat = this.format || "HH:mm:ss";
    }
}

appModule.component("appClock", {
    controller: ClockComponent,
    templateUrl: "clock.component.html",
    bindings: {
        "format": "<?",
    }
});
