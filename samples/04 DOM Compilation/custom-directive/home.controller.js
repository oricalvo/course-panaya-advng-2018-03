appModule.controller("HomeCtrl", function($scope) {
    $scope.title = "Hello Angular";

    $scope.userName = "Ori";

    $scope.change = function(contact) {
        contact.name = "XXX";
    }

    $scope.contacts = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        {"id": 3, "name": "Udi"}
    ];
});
