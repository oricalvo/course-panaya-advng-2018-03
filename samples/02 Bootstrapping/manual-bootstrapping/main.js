console.log("Create myApp module");
const myApp = angular.module("myApp", []);

myApp.config(function($provide) {
    console.log("config");

    myApp.$provide = $provide;
});

myApp.run(function() {
    console.log("run");
});

$(function() {
    console.log("DOM ready");
});

setTimeout(function() {
    console.log("Register controller");
    myApp.controller("HomeCtrl", function($scope, $injector) {
        $scope.title = "Hello Angular";

        $scope.getService = function() {
            console.log($injector.get("MyService"));
        }
    });

    console.log("before bootstrap");
    angular.bootstrap(document, ["myApp"]);
    console.log("after bootstrap");

    console.log("Register service");
    // myApp.service("MyService", function() {
    // });

    class MyService {}
    myApp.$provide.service("MyService", MyService);
}, 1000);


