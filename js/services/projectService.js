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

		      if (document.getElementById("projectDescription") != null){
		      	projectService.scrollTo('#projectDescription');
		      }
		      
		      else{
		      	projectService.scrollTo('#crewDescription');
		      }
		    },

		    setJourney: function(setProject, div){
		    	projectService.project = setProject;
		    },

		    scrollTo: function(section){
		    	$('html, body').animate({
		    		scrollTop: $(section).offset().top
		    	}, 1500);
		    },

		    isHovered: function(hoverProject){
		    	return projectService.projectHover === hoverProject;
		    },

		    setHoveredProject: function(setHoverProject){
		    	projectService.projectHover = setHoverProject;
		    }
		};
		return projectService;
	});
});