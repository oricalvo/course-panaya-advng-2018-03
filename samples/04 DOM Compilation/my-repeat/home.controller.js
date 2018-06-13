appModule.controller("HomeCtrl", function($scope) {
    $scope.title = "Hello Angular";

    $scope.contacts = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        {"id": 3, "name": "Udi"}
    ];

    $scope.change = function(contact) {
        contact.name = "XXX";
    }

    $scope.shuffle = function() {
        const tmp = $scope.contacts[0];
        $scope.contacts[0] = $scope.contacts[1];
        $scope.contacts[1] = tmp;
    }

    $scope.clear = function() {
        $scope.contacts = [];
    }
});
