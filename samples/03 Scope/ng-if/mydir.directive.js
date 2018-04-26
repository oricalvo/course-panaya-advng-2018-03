appModule.directive("myDir", function() {
    return {
        compile: function() {
            console.log("compile");

            return function() {
                console.log("link");
            }
        }
    }
});
