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

	directivesFactory.directive('developerProjects', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/partials/developer-projects.html"
		};
	});

	directivesFactory.directive('developerWeatherSwatch', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/partials/projects/developer-weather-swatch.html"
		};
	});

	directivesFactory.directive('developerEightBall', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/partials/projects/developer-eight-ball.html"
		};
	});

	directivesFactory.directive('developerMetrocity', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/partials/projects/developer-metrocity.html"
		};
	});

	directivesFactory.directive('developerXoxo', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/partials/projects/developer-xoxo.html"
		};
	});

	directivesFactory.directive('developerSunriseAlarm', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/partials/projects/developer-sunrise-alarm.html"
		};
	});

	directivesFactory.directive('developerZoneSix', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/partials/projects/developer-zone-six.html"
		};
	});

	directivesFactory.directive('developerContact', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/partials/developer-contact.html"
		};
	});

	directivesFactory.directive('footerJustin', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/partials/footer-justin.html"
		};
	});
});