appModule.controller("HomeCtrl", function($scope, $q, $timeout, $injector) {
    $scope.title = "Hello Angular";
    $scope.showCalc = false;

    $scope.load = function() {
        loadService().then(function() {
            $scope.showCalc = true;
        });
    }

    $scope.calc = function() {
        const lazyService = $injector.get("lazyService");
        $scope.result = lazyService.calc();
    }

    function loadService() {
        const defer = $q.defer();

        $.getScript("lazy.service.js", function() {
            defer.resolve();
        });

        return defer.promise;
    }
});
