//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory", 
	'directives/bboyDirectives',
	'services/tabService', 
	'services/projectService',
	'services/gmapsService',
	'services/verticalTimelineService'], 
	function(controllersFactory) {

	controllersFactory.controller('BboyCtrl', 
		['$scope', 
		'TabService',
		'ProjectService',
		'GmapsService',
		'VerticalTimelineService',

		function($scope, 
			tabService,
			projectService,
			gmapsService,
			verticalTimelineService) {

			$scope.tabService = tabService;
			$scope.projectService = projectService;
			$scope.gmapsService = gmapsService;
			$scope.verticalTimelineService = verticalTimelineService;
			$scope.verticalTimelineService.start();
			$scope.gmapsService.init_map_dance();
	}]);

});