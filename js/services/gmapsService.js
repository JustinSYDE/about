define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('GmapsService', function() {
		var gmapsService = {

			init_map: function(){
				var myOptions = {zoom:14,center:new google.maps.LatLng(43.4720646,-80.54294399999998),mapTypeId: google.maps.MapTypeId.ROADMAP};
				map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
				marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(43.4720646,-80.54294399999998)});
				infowindow = new google.maps.InfoWindow({content:"<b>Justin</b><br/>200 University Ave W<br/>N2L 3G1 Waterloo" });
				google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);
				google.maps.event.addDomListener(window, 'load', gmapsService.init_map);
			}
		}

		return gmapsService;
	});
});

