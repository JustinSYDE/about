define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('ProjectService', function() {
		var projectService = {
			project: -1,

		    isSet: function(checkProject) {
		      return projectService.project === checkProject;
		    },

		    setProject: function(setProject) {
		      projectService.project = setProject;
		      projectService.scrollTo('#projectDescription');
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