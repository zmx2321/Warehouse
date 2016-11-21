function VisibleController($scope) {
    $scope.visible = false;
    $scope.toggle = function () {
        $scope.visible = !$scope.visible;
    }
}