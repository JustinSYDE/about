//MAIN JAVASCRIPT FILE WHERE THE COORDINATION OF THE MAIN CONTROLLERS, SERVICES AND DIRECTIVES ARE CONFIGURED
//THIS FILE SERVES AS A CONTROL PANEL FOR THE WEB APP
//THIS FILE IS THE FIRST JAVASCRIPT FILE THAT IS LOADED AND CONTROLS THE INITIALALIZATION FLOW OF THE REST OF THE WEB APP

(function() {

	'use strict';

	//CONFIGURE THE LIBRARIES TO BE USED 
	//ASSIGN NAME ALIAS FOR DIRECTORIES AND INDICATE THEIR DIRECTORIES
	require.config({
		baseUrl: 'js',
		paths: {
			'angular': 'libs/angular-min-1.2.24',
			'angularRoute': 'libs/angular-route-min-1.2.24',
			'jquery': 'libs/jquery',
		},
		shim: {
			'angular': {
				exports: 'angular'
			},
			'angularRoute': {
				deps: ['angular']
			},
			'jquery': {
				exports: '$'
			}
		}
	});

	//DEFINE THE MAIN MODULES TO BE LOADED 
	define('controllersFactory', ['angular'], function(angular) {
		return angular.module('app.controllers', []);
	});

	define('servicesFactory', ['angular'], function(angular) {
		return angular.module('app.services', []);
	});

	define('directivesFactory', ['angular'], function(angular) {
		return angular.module('app.directives', []);
	});

	//DEFINE THE MOTHER 'APP' MODULE WHICH REQUIRES ALL THE OTHER MAIN MODULES TO BE INITIALIZED WITH IT
	define('app', [
		'angular',
		'angularRoute',
		'directivesFactory',
		'servicesFactory',
		'controllersFactory',
		],
		function(angular) {
			return angular.module('app', ['app.directives', 'app.services', 'app.controllers', 'ngRoute']);
		}
	);

	//BOOTSTRAP ANGULARJS TO THE MOTHER 'APP'
	require(['app', 
		'jquery'], 
		function(app, 
			jquery) {
		require([
				'controllers/developerCtrl',
			],
			function() {
				app.config(['$routeProvider', function($routeProvider) {
					$routeProvider
						.when('/', {templateUrl: 'templates/developer.html', controller: "DeveloperCtrl"}).
						otherwise({redirectTo: '/'})
				}]);

				angular.bootstrap(document, ['app']);
			}
		);
	});

})();