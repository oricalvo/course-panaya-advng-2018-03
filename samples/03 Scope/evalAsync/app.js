const appModule = angular.module("myApp", []);

appModule.controller("HomeCtrl", function($scope) {
    $scope.d1 = 1;
    $scope.d2 = 1;
    $scope.sideEffect = "";
    $scope.tmp = "Roni";

    $scope.change = function() {
        ++$scope.d1;
        ++$scope.d2;

        console.log("Changed d1", $scope.d1);
    }

    $scope.$watch("d2", function(newValue, oldValue) {
        if(newValue == oldValue) {
            return;
        }

        $scope.$evalAsync(function() {
            console.log("D2 changed");

            console.log("sideEffect", $scope.sideEffect);

            console.log("Changing tmp to Ori");
            $scope.tmp = "Ori";
        });
    });

    $scope.$watch("d1", function(newValue, oldValue) {
        if(newValue == oldValue) {
            $scope.sideEffect = $scope.d1 + "XXX";

            return;
        }

        console.log("D1 changed");

        $scope.sideEffect = $scope.d1 + "XXX";
        console.log("UPDATING sideEffect", $scope.sideEffect);
    });
});
