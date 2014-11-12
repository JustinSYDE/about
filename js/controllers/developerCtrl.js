//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory", 
	'directives/directives',
	'services/tabService', 
	'services/projectService',
	'services/gmapsService'], 
	function(controllersFactory) {

	controllersFactory.controller('DeveloperCtrl', 
		['$scope', 
		'TabService',
		'ProjectService',
		'GmapsService',

		function($scope, 
			tabService,
			projectService,
			gmapsService) {

			$scope.tabService = tabService;
			$scope.projectService = projectService;
			$scope.gmapsService = gmapsService;
			$scope.gmapsService.init_map();
	}]);

});