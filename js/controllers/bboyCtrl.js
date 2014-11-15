//TEMPLATE OF THE MAIN CONTROLLER FOR MAIN TEMPLATE HTML
//CONTROLLER DEFINTIIONS SHOULD BE MINIMAL SPECIFYING WHICH CONTROLLER USES WHICH SERVICE, ETC.

define(["controllersFactory", 
	'directives/bboyDirectives',
	'services/tabService', 
	'services/gmapsService'], 
	function(controllersFactory) {

	controllersFactory.controller('BboyCtrl', 
		['$scope', 
		'TabService',
		'GmapsService',

		function($scope, 
			tabService,
			gmapsService) {

			$scope.tabService = tabService;
			$scope.gmapsService = gmapsService;
			$scope.gmapsService.init_map_dance();
	}]);

});