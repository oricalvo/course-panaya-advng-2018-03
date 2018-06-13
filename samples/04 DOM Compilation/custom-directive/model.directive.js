appModule.directive("myModel", function($parse) {
    const ddo = {
        restrict: "A",
        compile: function(element, attrs) {
            const expr = attrs.myModel;
            const parseFn = $parse(expr);

            if(!parseFn.assign) {
                throw new Error("You must specify assignable expression");
            }

            return function link(scope, element, attrs) {
                let duringInputEvent = false;

                scope.$watch(parseFn, function(newValue) {
                    if(duringInputEvent) {
                        return;
                    }

                    console.log("$watch", newValue);

                    element.val(newValue);
                });

                element.on("input", function(e) {
                    duringInputEvent = true;

                    const newValue = e.target.value;

                    parseFn.assign(scope, newValue);

                    scope.$apply();

                    duringInputEvent = false;
                });
            }
        }
    };

    return ddo;
});
