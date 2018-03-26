const myApp = angular.module("myApp", []);

myApp.controller("HomeCtrl", function($scope) {
    $scope.title = "Hello Angular";
});

myApp.service("MyService", function() {
});

console.log("xxx");