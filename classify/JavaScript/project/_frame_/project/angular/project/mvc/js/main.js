/*function HelloAngular($scope) {
	$scope.greeting = {
		text: 'Hello'
	};
}*/

var myModule = angular.module("HelloAngular", []);

myModule.controller("HelloAngular", 
	function HelloAngular($scope) {
		$scope.greeting = {
			text: 'Hello'
		};
	}
);