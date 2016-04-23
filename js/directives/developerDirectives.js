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

	directivesFactory.directive('developerZoneSix', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-zone-six.html"
		};
	});

	directivesFactory.directive('developerDontRush', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-dont-rush.html"
		};
	});

	directivesFactory.directive('developerSmartTrek', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-smart-trek.html"
		};
	});

	directivesFactory.directive('developerNotebook', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-notebook.html"
		};
	});

	directivesFactory.directive('developerLandingPages', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-landing-pages.html"
		};
	});

	directivesFactory.directive('developerLeaderboard', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-leaderboard.html"
		};
	});

	directivesFactory.directive('developerNeo4j', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/projects/developer-neo4j.html"
		};
	});

	directivesFactory.directive('developerContact', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/developer-contact.html"
		};
	});

	directivesFactory.directive('developerWorkExperience', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/developerPartials/developer-work-experience.html"
		};
	});

	directivesFactory.directive('footerJustin', function(){
		return{
			restrict: 'E',
			templateUrl: "templates/footer-justin.html"
		};
	});
});
