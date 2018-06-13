class AppComponent {
    constructor(modalService) {
        this.modalService = modalService;

        console.log("modalService", this.modalService);
    }

    remove() {
        this.modalService.show(ConfirmDeleteComponent);
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
