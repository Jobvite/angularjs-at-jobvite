angular.module('Slides', [])

.controller('NoDomGlue', function($scope) {

	$scope.input = "Initial value";

})

.controller('Declarative', function($scope) {

	$scope.isPaneVisible = false;
	$scope.togglePane = function() {
		$scope.isPaneVisible = !$scope.isPaneVisible;
	};

})

.controller('Animations', function($scope, $timeout) {

	$scope.panes = {
		fade: true,
		bounce: true,
		rotate: true,
		good: true
	};
	$scope.hideShow = function(val) {
		$scope.panes[val] = false;
		$timeout(function() {
			$scope.panes[val] = true;
		}, 2000);
	};

})

.directive('pane', function() {
	return {
		restrict: 'E',
		template: '<div class="pane"><div class="pane-inner" ng-transclude></div></div>',
		replace: true,
		transclude: true
	};
});