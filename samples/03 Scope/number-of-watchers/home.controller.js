appModule.controller("HomeCtrl", function($scope) {
    $scope.title = "Hello Angular";
    $scope.showList = true;

    $scope.contacts = [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
    ];

    $scope.toggle = function() {
        $scope.showList = !$scope.showList;
    }
});
