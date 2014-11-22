//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory", 
	'directives/developerDirectives',
	'services/tabService', 
	'services/projectService'], 
	function(controllersFactory) {

	controllersFactory.controller('DeveloperCtrl', 
		['$scope', 
		'TabService',
		'ProjectService',

		function($scope, 
			tabService,
			projectService) {

			$scope.tabService = tabService;
			$scope.projectService = projectService;
	}]);

});