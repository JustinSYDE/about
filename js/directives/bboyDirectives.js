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

	directivesFactory.directive('bboyStory', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/bboy-story.html"
		};
	});

	directivesFactory.directive('bboyCrew', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/bboy-crew.html"
		};
	});

	directivesFactory.directive('bboyJourney', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/bboy-journey.html"
		};
	});

	directivesFactory.directive('bboyContact', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/bboy-contact.html"
		};
	});
});