//MAIN DIRECTIVE FOR MAIN TEMPLATE HTML

define(['directivesFactory'], function(directivesFactory){

	directivesFactory.directive('navbar', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/partials/navbar.html"
		};
	});

	directivesFactory.directive('developerBanner', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/partials/developer-banner.html"
		};
	});

	directivesFactory.directive('developerSkills', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/partials/developer-skills.html"
		};
	});
});