const appModule = angular.module("myApp", []);

appModule.config(function($provide) {
    appModule.service = $provide.service;
});
