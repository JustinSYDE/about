//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory", 
	'services/tabService', 
	'directives/directives'], 
	function(controllersFactory) {

	controllersFactory.controller('DeveloperCtrl', 
		['$scope', 
		'TabService',
		function($scope, 
			tabService) {

			$scope.tabService = tabService;
	}]);

});