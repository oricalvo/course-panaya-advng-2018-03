const appModule = angular.module("myApp", []);

// const originalPromise = window.Promise;

window.Promise = function(func) {
    console.log("Promise");
}

window.Promise.prototype.then = function(){
    console.log("then");
}

appModule.controller("HomeCtrl", function($scope, $q) {
    $scope.run = async function() {
        console.log("before");
        // const p = getAllContactsFromServer();
        // console.log(p);
        $scope.contacts = await getAllContactsFromServer();
        console.log("after");
    }

    // async function run() {
    //     return await getAllContactsFromServer();
    // }

    function getAllContactsFromServer() {
        return delay(2500).then(function() {
            return [
                {id:1, name: "Ori"},
                {id:2, name: "Roni"},
            ];
        });
    }

    function delay(ms) {
        const defer = $q.defer();

        setTimeout(function() {
            defer.resolve();
        }, ms);

        return defer.promise;
    }
});

