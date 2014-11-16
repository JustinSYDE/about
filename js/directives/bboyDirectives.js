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

	directivesFactory.directive('bboyDk', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/saiko/bboy-dk.html"
		};
	});

	directivesFactory.directive('bboyDryleaf', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/saiko/bboy-dryleaf.html"
		};
	});

	directivesFactory.directive('bboyIsotope', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/saiko/bboy-isotope.html"
		};
	});

	directivesFactory.directive('bboyJuvi', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/saiko/bboy-juvi.html"
		};
	});

	directivesFactory.directive('bboyMaddy', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/saiko/bboy-maddy.html"
		};
	});

	directivesFactory.directive('bboyMusclez', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/saiko/bboy-musclez.html"
		};
	});

	directivesFactory.directive('bboyPabreezy', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/saiko/bboy-pabreezy.html"
		};
	});

	directivesFactory.directive('bboyRawfiki', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/saiko/bboy-rawfiki.html"
		};
	});

	directivesFactory.directive('bgirlKarebear', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/bboyPartials/saiko/bgirl-karebear.html"
		};
	});
});