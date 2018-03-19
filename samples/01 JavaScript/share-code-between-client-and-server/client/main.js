var angular = require("angular");
var helpers = require("../common/helpers");

console.log(angular);

var appModule = angular.module("myApp", []);

appModule.controller("HomeCtrl", function($scope) {
    $scope.str = helpers.format("Hello");
});

angular.bootstrap(document, [appModule.name]);

