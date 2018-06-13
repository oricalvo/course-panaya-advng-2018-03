class ModalComponent {
    constructor(di, $compile, $scope, $element) {
        console.log("di", di);

        this.$compile = $compile;
        this.$scope = $scope;
        this.$element = $element;
        this.active = false;

        di.value("modalService", this);
    }

    show(compType) {
        const tagName = compType.tagName;
        const template = "<" + tagName + "></" + tagName + ">";
        const element = angular.element(template);
        const linkFn = this.$compile(element);
        linkFn(this.$scope);
        console.log(template);
        console.log(element);

        const content = angular.element(this.$element[0].querySelector(".content"));
        content.append(element);

        this.active = true;
    }

    isHosted(scope) {
        let parent = scope.$parent;
        while(parent) {
            if(parent == this.$scope) {
                return true;
            }

            parent = parent.$parent;
        }

        return false;
    }
}

appModule.component("appModal", {
    controller: ModalComponent,
    templateUrl: "modal.component.html",
});
