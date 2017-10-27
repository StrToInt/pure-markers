//все корды в формате XZY
//id гейтов=[I,O; I-In(на главное острове),O-Out(его пара)]+[N,E,S,W; N-Север,E-Восток,S-Юг,W-Запад]+{число от -2 до +2, значит отклонение по часовой стрелке}

var MAPCRAFTER_MARKERS = [
	
	
	
	//--------------------------------------------------------------------------------------------------------------------------
	//                                                       Popup's
	//--------------------------------------------------------------------------------------------------------------------------
	
	
	
	{
		"id" : "homes",
		"name" : "Дома",
		"icon" : "https://raw.githubusercontent.com/StrToInt/pure-markers/master/HomeIcon.png",
		"iconSize" : [32, 32],
		"showDefault" : true,
		"markers" : {
			"pure" : [
				{"pos" : [-37, -143, 0], "title" : "<br>Недо домик на спавне</b><br>типо для новичков но там ничо нет"},
				{"pos" : [250, -441, 0], "title" : "Центр общего дома + порт в ад"},
				{"pos" : [264, -422, 0], "title" : "Чей то дом"},
				{"pos" : [285, -441, 0], "title" : "Sad_Moon"},
				{"pos" : [370, -642, 0], "title" : "tur1k"},
				{"pos" : [264, -519, 0], "title" : "WaterDemon"},
				{"pos" : [336, -395, 0], "title" : "<b>Замок следующих:</b><br>arhi<br>Lingnum"},
				{"pos" : [537, -342, 0], "title" : "<b>Замок следующих:</b><br>AlanFox<br>LittleFox<br>Ederius<br>Sereina"},
				{"pos" : [1210, -485, 0], "title" : "Sun Serega"},
			],
		},
	},
	{
		"id" : "farms",
		"name" : "Фермы",
		"icon" : "https://raw.githubusercontent.com/StrToInt/pure-markers/master/FactoryIcon.png",
		"iconSize" : [32, 32],
		"showDefault" : false,
		"markers" : {
			"pure" : [
				{"pos" : [2040, -504, 190], "title" : "Ферма пороха"},
				{"pos" : [2100, -478, 190], "title" : "Ферма скелетов"},
			],
			"pure_end" : [
				{"pos" : [800, 0, 0], "title" : "Ферма житаков"},
				{"pos" : [-775, 0, 0], "title" : "Ферма Эндерменовый дождь"},
			],
		},
	},
	{
		"id" : "portals",
		"name" : "Порталы",
		"icon" : "https://raw.githubusercontent.com/StrToInt/pure-markers/master/PortalIcon.png",
		"iconSize" : [32, 32],
		"showDefault" : true,
		"markers" : {
			"pure" : [
				{"pos" : [-5, -2148, 0], "title" : "Край"},
			],
			"nether_caves" : [
				{"pos" : [46.5, -53, 0], "title" : "<b>Общий дом</b><br>Sad_Moon"},
				{"pos" : [56, -37.5, 0], "title" : "<b>Замок следующих:</b><br>arhi<br>Lingnum"},
				{"pos" : [73, -37.5, 0], "title" : "<b>Замок следующих:</b><br>AlanFox<br>LittleFox<br>Ederius<br>Sereina"},
				{"pos" : [265, -58, 0], "title" : "<b>Зона временных ферм</b><br>Ферма пороха(и ниток)<br>Ферма скелетов<br>порт дето тут, надо бы точные корды"},
				{"pos" : [6, -264.5, 0], "title" : "Порт в край"},
			],
			"pure_end" : [
				{"pos" : [0, 0, 70], "title" : "Порт назад"},
			],
		},
	},
	{
		"id" : "poi",
		"name" : "Интересное",
		"icon" : "https://raw.githubusercontent.com/StrToInt/pure-markers/master/PoiIcon.png",
		"iconSize" : [32, 59],
		"showDefault" : false,
		"markers" : {
			"pure" : [
				{"pos" : [2100, -500, 100], "title" : "Зона временных ферм"},
			],
			"nether" : [
				{"pos" : [43, -100, 0], "title" : "Дырка в бедроке 3х3"},
			],
			"pure_end" : [
				{"pos" : [17256,-31879,63], "title" : "Вещи Sun Serega(что не влезло в энд сундуке).<br>Забирайте кому не лень долететь сюды)))"},
			],
		},
	},
	{
		"id" : "gate's",
		"name" : "Гейты",
		"icon" : "https://raw.githubusercontent.com/StrToInt/pure-markers/master/PortalIcon.png",
		"iconSize" : [16, 16],
		"showDefault" : true,
		"markers" : {
			"pure_end" : [
				
				{"pos" : [   +223,  -7604, 85], "title" : "Доп. Гейт"},
				{"pos" : [    +67,  -9152, 69], "title" : "Доп. Гейт"},
				{"pos" : [   +167,  -9872, 98], "title" : "Доп. Гейт"},
				{"pos" : [   -162, -12414,129], "title" : "Доп. Гейт"},
				{"pos" : [   -232, -18303, 92], "title" : "Доп. Гейт"},
				{"pos" : [   -147, -19086, 94], "title" : "Доп. Гейт"},
				{"pos" : [   -360, -22007, 84], "title" : "Доп. Гейт"},
				{"pos" : [   -635, -26750, 83], "title" : "Доп. Гейт"},
				{"pos" : [   -716, -27693, 70], "title" : "Доп. Гейт"},
				{"pos" : [   -748, -29279, 79], "title" : "Доп. Гейт"},
				{"pos" : [  +8764, -31865, 83], "title" : "Доп. Гейт"},
				{"pos" : [  +7290,   -691, 77], "title" : "Доп. Гейт"},
				{"pos" : [ +11348,   -971, 74], "title" : "Доп. Гейт"},
				{"pos" : [ +13979,   -891, 76], "title" : "Доп. Гейт"},
				{"pos" : [ +14060,   -860, 73], "title" : "Доп. Гейт"},
				{"pos" : [ +16522,   -867, 76], "title" : "Доп. Гейт"},
				{"pos" : [ +25945,   -829, 78], "title" : "Доп. Гейт"},
				{"pos" : [ +37751,   -992, 75], "title" : "Доп. Гейт"},
				{"pos" : [ +44248,  -1287, 76], "title" : "Доп. Гейт"},
				{"pos" : [ +46091,  -1366, 69], "title" : "Доп. Гейт"},
				{"pos" : [ +51464,  -1466, 71], "title" : "Доп. Гейт"},
				{"pos" : [ +53045,  -1594, 77], "title" : "Доп. Гейт"},
				{"pos" : [ +53060,  -1421, 74], "title" : "Доп. Гейт"},
				{"pos" : [ +64264,  -1421, 68], "title" : "Доп. Гейт"},
				{"pos" : [ +64383,  -1522, 74], "title" : "Доп. Гейт"},
				{"pos" : [ +65956,  -1513, 75], "title" : "Доп. Гейт"},
				{"pos" : [ +66428,  -1659, 72], "title" : "Доп. Гейт"},
				{"pos" : [ +71647,  -1513, 74], "title" : "Доп. Гейт"},
				{"pos" : [ +78215,  -1378, 69], "title" : "Доп. Гейт"},
				{"pos" : [ +84192,  -1521, 75], "title" : "Доп. Гейт"},
				{"pos" : [ +88767,  -1560, 68], "title" : "Доп. Гейт"},
				{"pos" : [ +95074,  -1260, 82], "title" : "Доп. Гейт"},
				{"pos" : [+100893,  -1260, 70], "title" : "Доп. Гейт"},
				{"pos" : [ +25945,  -1361, 78], "title" : "Доп. Гейт"},
				{"pos" : [ +25945,   -829, 78], "title" : "Доп. Гейт"},
				{"pos" : [ +25945,   -829, 78], "title" : "Доп. Гейт"},
				
				
				{"pos" : [-56, -77, 75], "title" : "<b>Гейт IN-2</b><br>[Закрыт]"},
				{"pos" : [-29, -91, 75], "title" : "<b>Гейт IN-1</b><br>[Закрыт]"},
				{"pos" : [+00, -96, 75], "title" : "<b>Гейт IN+0</b><br>[Закрыт]"},
				{"pos" : [+29, -91, 75], "title" : "<b>Гейт IN+1</b><br>[Закрыт]"},
				{"pos" : [+56, -77, 75], "title" : "<b>Гейт IN+2</b><br>[Новые земли]"},
				
				{"pos" : [+77, -56, 75], "title" : "<b>Гейт IE-2</b><br>[Закрыт]"},
				{"pos" : [+91, -29, 75], "title" : "<b>Гейт IE-1</b><br>[Закрыт]"},
				{"pos" : [+96, +00, 75], "title" : "<b>Гейт IE+0</b><br>[Ферма житаков]"},
				{"pos" : [+91, +29, 75], "title" : "<b>Гейт IE+1</b><br>[Закрыт]"},
				{"pos" : [+77, +56, 75], "title" : "<b>Гейт IE+2</b><br>[Закрыт]"},
				
				{"pos" : [+56, +77, 75], "title" : "<b>Гейт IS-2</b><br>[Закрыт]"},
				{"pos" : [+29, +91, 75], "title" : "<b>Гейт IS-1</b><br>[Закрыт]"},
				{"pos" : [+00, +96, 75], "title" : "<b>Гейт IS+0</b><br>[Новые земли]"},
				{"pos" : [-29, +91, 75], "title" : "<b>Гейт IS+1</b><br>[Закрыт]"},
				{"pos" : [-56, +77, 75], "title" : "<b>Гейт IS+2</b><br>[Закрыт]"},
				
				{"pos" : [-77, +56, 75], "title" : "<b>Гейт IW-2</b><br>[Закрыт]"},
				{"pos" : [-91, +29, 75], "title" : "<b>Гейт IW-1</b><br>[Закрыт]"},
				{"pos" : [-96, +00, 75], "title" : "<b>Гейт IW+0</b><br>[Ферма эндерменов]"},
				{"pos" : [-91, -29, 75], "title" : "<b>Гейт IW+1</b><br>[Закрыт]"},
				{"pos" : [-77, -56, 75], "title" : "<b>Гейт IW+2</b><br>[Закрыт]"},
				
				
				{"pos" : [ +615, -800, 69], "title" : "<b>Гейт ON+2</b><br>[Новые земли]"},
				
				{"pos" : [ +767,   -1, 40], "title" : "<b>Гейт OE+0</b><br>[Ферма житаков]"},
				
				{"pos" : [  -16,+1007, 69], "title" : "<b>Гейт OS+0</b><br>[Новые земли]"},
				
				{"pos" : [ -773,   -3, 85], "title" : "<b>Гейт OW+0</b><br>[Ферма эндерменов]"},
				
			],
		},
	},
	
	
	
	//--------------------------------------------------------------------------------------------------------------------------
	//                                                       Line's
	//--------------------------------------------------------------------------------------------------------------------------
	
	
	
	{
		"id" : "gate traces",
		"name" : "Пути гейтов",
		"showDefault" : false,
		"createMarker" : function(ui, groupInfo, markerInfo) {
			
			var latlngs = [];
			latlngs.push(ui.mcToLatLng(markerInfo.p1[0], markerInfo.p1[1], markerInfo.p1[2]));
			latlngs.push(ui.mcToLatLng(markerInfo.p2[0], markerInfo.p2[1], markerInfo.p2[2]));
			
			return L.polyline(latlngs, {"color" : markerInfo.color}).bindPopup(markerInfo.text);
			
		},
		"markers" : {
			"pure_end" : [
				{"p1" : [+56, -77, 75], "p2" : [+96, +00, 75],"color" : "#FF0000","text":"IN+2-IE+0"},//skip 2
				
				{"p1" : [+96, +00, 75], "p2" : [+00, +96, 75],"color" : "#FF0000","text":"IE+0-IS+0"},//skip 4
				
				{"p1" : [+00, +96, 75], "p2" : [-96, +00, 75],"color" : "#FF0000","text":"IS+0-IW+0"},//skip 4
				
				{"p1" : [-96, +00, 75], "p2" : [+56, -77, 75],"color" : "#FF0000","text":"IW+0-IN+2"},//skip 6
				
				{"p1" : [+56, -77, 75], "p2" : [ +615, -800, 69],"color" : "#00FF00","text" : "<b>Путь гейта N+2</b><br>[Новые земли]"},
				{"p1" : [+96, +00, 75], "p2" : [ +767,   -1, 40],"color" : "#00FF00","text" : "<b>Путь гейта E+0</b><br>[Ферма житаков]"},
				{"p1" : [+00, +96, 75], "p2" : [  -16,+1007, 69],"color" : "#00FF00","text" : "<b>Путь гейта S+0</b><br>[Новые земли]"},
				{"p1" : [-96, +00, 75], "p2" : [ -773,   -3, 85],"color" : "#00FF00","text" : "<b>Путь гейта W+0</b><br>[Ферма эндерменов]"},
			],
		},
	},
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
				{"p1" : [0, 0, 0],"p2" : [0, 0, 0],"color" : "#000000","text":"Null"},
			],
			"nether" : [
				{"p1" : [0, 0, 0],"p2" : [0, 0, 0],"color" : "#000000","text":"Null"},
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
				],"color" : "#000000","fo" : 0.5,"text" : "Null"},
			],
		},
		
	},
	
];
