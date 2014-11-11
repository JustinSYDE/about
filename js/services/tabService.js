define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('TabService', function() {
		var tabService = {
			tab: 0,

		    isSet: function(checkTab) {
		      return tabService.tab === checkTab;
		    },

		    setTab: function(setTab) {
		      tabService.tab = setTab;
		    },

		    scrollTo: function(section){
		    	$('html, body').animate({
		    		scrollTop: $(section).offset().top
		    	}, 1500);
		    }
		};
		return tabService;
	});
});