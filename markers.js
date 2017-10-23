var MAPCRAFTER_MARKERS = [
	
	
	
	//--------------------------------------------------------------------------------------------------------------------------
	//                                                       Popup's
	//--------------------------------------------------------------------------------------------------------------------------
	
	
	
	{
		"id" : "homes",
		"name" : "Дома",
		"icon" : "home.png",
		"iconSize" : [32, 32],
		"showDefault" : true,
		"markers" : {
			"pure" : [
				{"pos" : [0, 0, 0], "title" : "Null"},
			],
		},
	},
	{
		"id" : "farms",
		"name" : "Фермы",
		"icon" : "farm.png",
		"iconSize" : [32, 32],
		"showDefault" : false,
		"markers" : {
			"pure" : [
				{"pos" : [0, 0, 0], "title" : "Null"},
			],
			"nether" : [
				{"pos" : [0, 0, 0], "title" : "Null"},
			],
			"nether_caves" : [
				{"pos" : [0, 0, 0], "title" : "Null"},
			],
			"pure_end" : [
				{"pos" : [0, 0, 0], "title" : "Null"},
			],
		},
	},
	{
		"id" : "portals",
		"name" : "Порталы",
		//"icon" : "portal.png",
		//"icon" : "https://counter-strike.com.ua/uploads/images/icons/portal/portal_102.png",
		"icon" : "https://3.downloader.disk.yandex.ru/preview/e590249b34bc85b2081719287ba3c4d0bc1170c97b0ec81cb3096afdcc66a34a/inf/9UWOJCYoqAO045mwgsIZiLFT85zTE69lQc1xaDg3zu0XFOh6AJbVQuTjgyzI_Wnj1xGRdGGC4vYgk459TSZv9A%3D%3D?uid=0&filename=portal.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=XXL&crop=0",
		"iconSize" : [32, 32],
		"showDefault" : true,
		"markers" : {
			"pure" : [
				{"pos" : [0, 0, 0], "title" : "Null"},
			],
			"nether" : [
				{"pos" : [0, 0, 0], "title" : "Null"},
			],
			"nether_caves" : [
				{"pos" : [0, 0, 0], "title" : "Null"},
			],
			"pure_end" : [
				{"pos" : [0, 0, 0], "title" : "Null"},
			],
		},
	},
	{
		"id" : "poi",
		"name" : "Интересное",
		//"icon" : "poi.png",
		//"icon" : "https://4.downloader.disk.yandex.ru/preview/bce58b2f9de16eee6a840795534076653be8747c7b59640ce28fa70d91b3d143/inf/9UWOJCYoqAO045mwgsIZiL7VY3JStKUdEb-ceNS9CnJQV3uQIV06MT38mYDK8rqUw9E8JS6gTJhcm3zCOcHA7Q%3D%3D?uid=0&filename=Hier.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=XXL&crop=0",
		"iconSize" : [64, 64],
		"showDefault" : false,
		"markers" : {
			"pure" : [
				{"pos" : [0, 0, 0], "title" : "Null"},
			],
			"nether" : [
				{"pos" : [0, 0, 0], "title" : "Null"},

			],
		},
	},
	
	
	
	//--------------------------------------------------------------------------------------------------------------------------
	//                                                       Line's
	//--------------------------------------------------------------------------------------------------------------------------
	
	
	
	{
		"id" : "traces",
		"name" : "Тропы",
		"showDefault" : false,
		"createMarker" : function(ui, groupInfo, markerInfo) {
			
			var latlngs = [];
			latlngs.push(ui.mcToLatLng(markerInfo.p1[0], markerInfo.p1[1], markerInfo.p1[2]));
			latlngs.push(ui.mcToLatLng(markerInfo.p2[0], markerInfo.p2[1], markerInfo.p1[2]));
			
			return L.polyline(latlngs, {"color" : markerInfo.color}).bindPopup(markerInfo.text);;
			
		},
		"markers" : {
			"pure" : [
				{"p1" : [0, 0, 0],"p2" : [0, 0, 0],"color" : "#000000","text":"Null"},//Null
			],
			"nether" : [
				{"p1" : [0, 0, 0],"p2" : [0, 0, 0],"color" : "#000000","text":"Null"},//Null
			],
		},
	},
	
	
	
	//--------------------------------------------------------------------------------------------------------------------------
	//                                                     Area's
	//--------------------------------------------------------------------------------------------------------------------------
	
	
	
	{
		"id" : "Polygons",
		"name" : "Areas",
		"showDefault" : false,
		"createMarker" : function(ui, groupInfo, markerInfo) {
			
			var latlngs = [];
			for (var i = 0; i < markerInfo.p.length; i++)
				latlngs.push(ui.mcToLatLng(markerInfo.p[i][0], markerInfo.p[i][1], 128));
			
			return L.polygon(
				latlngs,
				{
					color : markerInfo.color,
					fillOpacity : markerInfo.fo
				}
				).bindPopup(markerInfo.text);
			
		},
		"markers" : {
			"pure" : [
				{"p" : [
					[ 0,0 ],
				],"color" : "#000000","fo" : 0.5,"text" : "<b>Null</b><br>Very Null</br>"},
			],
		},
		
	},
	
];
