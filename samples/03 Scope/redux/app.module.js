const appModule = angular.module("myApp", []);

appModule.run(function($rootScope) {
    let iterationCount = 0;

    function iteration() {
        ++iterationCount;

        console.log("Iteration ", iterationCount);
    }

    $rootScope.$watch(iteration);
});
