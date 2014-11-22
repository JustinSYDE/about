//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory", 
	'services/tabService', 
	'services/projectService',
	'services/verticalTimelineService',
	'directives/bboyDirectives'], 
	function(controllersFactory) {

	controllersFactory.controller('BboyCtrl', 
		['$scope', 
		'TabService',
		'ProjectService',
		'VerticalTimelineService',

		function($scope, 
			tabService,
			projectService,
			verticalTimelineService) {

			$scope.tabService = tabService;
			$scope.projectService = projectService;
			$scope.verticalTimelineService = verticalTimelineService;
			
			$scope.verticalTimelineService.start();
	}]);

});