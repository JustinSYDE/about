//MAIN DIRECTIVE FOR MAIN TEMPLATE HTML

define(['directivesFactory'], function(directivesFactory){

	directivesFactory.directive('developerNavbar', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/developer-navbar.html"
		};
	});

	directivesFactory.directive('developerBanner', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/developer-banner.html"
		};
	});

	directivesFactory.directive('developerSkills', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/developer-skills.html"
		};
	});

	directivesFactory.directive('developerProjects', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/developer-projects.html"
		};
	});

	directivesFactory.directive('developerProjectDescriptions', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/developer-project-descriptions.html"
		};
	});

	directivesFactory.directive('developerWeatherSwatch', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-weather-swatch.html"
		};
	});

	directivesFactory.directive('developerEightBall', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-eight-ball.html"
		};
	});

	directivesFactory.directive('developerMetrocity', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-metrocity.html"
		};
	});

	directivesFactory.directive('developerXoxo', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-xoxo.html"
		};
	});

	directivesFactory.directive('developerSunriseAlarm', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-sunrise-alarm.html"
		};
	});

	directivesFactory.directive('developerZoneSix', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-zone-six.html"
		};
	});

	directivesFactory.directive('developerContact', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/developer-contact.html"
		};
	});

	directivesFactory.directive('footerJustin', function(){  
		return{
			restrict: 'E',
			templateUrl: "templates/footer-justin.html"
		};
	});
});