//MAIN DIRECTIVE FOR MAIN TEMPLATE HTML

define(['directivesFactory'], function(directivesFactory){

	directivesFactory.directive('frontNavbar', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/frontPartials/front-navbar.html"
		};
	});

	directivesFactory.directive('frontBboy', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/frontPartials/front-bboy.html"
		};
	});

	directivesFactory.directive('frontDeveloper', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/frontPartials/front-developer.html"
		};
	});
});