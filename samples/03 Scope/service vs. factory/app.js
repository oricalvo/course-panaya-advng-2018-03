const appModule = angular.module("myApp", []);

appModule.controller("HomeCtrl", function($injector, $scope, pullService) {
    console.log("pullService", pullService);

    console.log("$http", $injector.get("$http"));

    // pullService.start();

    $scope.run = function() {
    }
});

appModule.config(function(pullServiceProvider) {
    console.log("provider", pullServiceProvider);

    // pullServiceProvider.config();
});

// function PullService() {
//     console.log("this", this);
// }
//
// PullService.prototype.init = function() {
//     this.intervalId = setInterval(this.onTick.bind(this), 1000);
// }
//
// PullService.prototype.onTick = function() {
// }

function PullService() {
    var intervalId;

    function init() {
        intervalId = setInterval(onTick, 1000);
    }

    function onTick() {
    }

    return {
        init,
    }
}

appModule.service("pullService", PullService);
// appModule.factory("pullService", PullService);
// appModule.value("pullService", XXX);

// appModule.provider("pullService", function() {
//     this.$get = function() {
//         console.log("provider.$get");
//
//         return {
//             start: function() {
//                 console.log("start");
//             },
//             stop: function() {
//             }
//         };
//     }
//
//     this.config = function() {
//         console.log("provider.config");
//     }
// });

// appModule.service("pullService", function() {
//     this
//     return {};
// });
