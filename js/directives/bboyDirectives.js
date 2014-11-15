//MAIN DIRECTIVE FOR MAIN TEMPLATE HTML

define(['directivesFactory'], function(directivesFactory){

	directivesFactory.directive('bboyNavbar', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/bboy-navbar.html"
		};
	});

	directivesFactory.directive('bboyBanner', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/bboy-banner.html"
		};
	});
});