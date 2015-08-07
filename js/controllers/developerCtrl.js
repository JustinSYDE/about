//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory", 
	'directives/developerDirectives',
	'services/projectService'], 
	function(controllersFactory) {

	controllersFactory.controller('DeveloperCtrl', 
		['$scope', 
		'ProjectService',

		function($scope, 
			projectService) {

			$scope.projectService = projectService;
	}]);

});