appModule.directive("myBind", function() {
    const ddo = {
        restrict: "A",
        compile: function(element, attrs) {
            const expr = attrs.myBind;
            console.log("myBind.compile", expr);

            return function link(scope, element, attrs) {
                console.log("myBind.link", scope);

                scope.$watch(expr, function(newValue) {
                    element.text(newValue);
                });
            }
        },
    };

    return ddo;
});
