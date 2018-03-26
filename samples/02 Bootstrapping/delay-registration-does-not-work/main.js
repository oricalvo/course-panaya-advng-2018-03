const myApp = angular.module("myApp", []);

setTimeout(function() {
    myApp.controller("HomeCtrl", function($scope) {
        $scope.title = "Hello Angular";
    });

    myApp.service("MyService", function() {
    });
}, 1000);

