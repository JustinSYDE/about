define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('ProjectService', function() {
		var projectService = {
			project: -1,
			projectHover: -1,

		    isSet: function(checkProject) {
		      return projectService.project === checkProject;
		    },

		    setProject: function(setProject) {
		      projectService.project = setProject;

		      if ((projectService.project >= 0) && document.getElementById("projectDescription") != null){
		      	projectService.scrollTo('#projectDescription');
		      }
		      
		      else{
		      	projectService.scrollTo('#developerProjects');
		      }
		    },

		    scrollTo: function(section){
		    	$('html, body').animate({
		    		scrollTop: $(section).offset().top
		    	}, 1500);
		    }
		};
		return projectService;
	});
});