appModule.controller("HomeCtrl", function($scope) {
    $scope.title = "Hello Angular";

    $scope.contacts = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        {"id": 3, "name": "Udi"}
    ];

    $scope.edit = function(contact) {
        console.log("edit", contact);
    }

    $scope.remove = function(contact) {
        const index = $scope.contacts.indexOf(contact);
        if(index != -1) {
            $scope.contacts.splice(index, 1);
            console.log($scope.contacts);
        }
    }
});
