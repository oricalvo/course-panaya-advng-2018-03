class ConfirmDeleteComponent {
    constructor(modalService, $scope) {
        console.log("ConfirmDeleteComponent.ctor");

        this.$scope = $scope;
        this.modalService = modalService;
    }

    ok() {
        if(this.modalService.isHosted(this.$scope)) {
            console.log("hosted");
        }
    }
}

ConfirmDeleteComponent.tagName = "app-confirm-delete";

appModule.component("appConfirmDelete", {
    controller: ConfirmDeleteComponent,
    templateUrl: "confirmDelete.component.html",
});
