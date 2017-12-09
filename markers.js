//все корды в формате XZY
//id гейтов=[I,O; I-In(на гл. острове),O-Out(его пара)]+[N,E,S,W; N-Север,E-Восток,S-Юг,W-Запад]+{число от -2 до +2, значит отклонение по часовой стрелке}

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
				{"pos" : [   -37,   -143,  64], "title" : "<b>Недо домик на спавне</b><br>типо для новичков но там ничо нет"},
				{"pos" : [   256,   -441,  68], "title" : "Центр общего дома + порт в ад"},
				{"pos" : [   263,   -422,  72], "title" : "Чей то дом#1"},
				{"pos" : [   307,   -299, 107], "title" : "Crasis"},
				{"pos" : [   286,   -442,  81], "title" : "Sad_Moon"},
				{"pos" : [   367,   -643, 101], "title" : "tur1k"},
				{"pos" : [   261,   -520,  86], "title" : "WaterDemon"},
				{"pos" : [   335,   -394,  72], "title" : "archi"},
				{"pos" : [  1025     -17,  71], "title" : "KertoMAJ"},
				{"pos" : [   428,   -315,  88], "title" : "Lignium"},
				{"pos" : [  1317,   -736,  67], "title" : "sleepwalker"},
				{"pos" : [   526,   -428,  58], "title" : "AT13"},
				{"pos" : [ 23247, -23644,  73], "title" : "<b>Дача(хижина)<b><br>archi"},
				{"pos" : [ 23296, -23649,  65], "title" : "<b>Дом<b><br>Stacy<br>пёсики<br>(и не много tur1k)"},
				{"pos" : [  -305,   4406,  70], "title" : "<b>Архипелаг следующих:</b><br>Onkel_SHiZA<br>WolfStein<br>Kuroneko_san"},
				{"pos" : [  1198,  -1812,  65], "title" : "<b>Убежище</b><br>V_o_V_a_X_a<br>R_o_M_a_X_a_UA"},
				{"pos" : [   544,   -335,  80], "title" : "<b>Замок</b><br>AlanFox<br>LittleFox<br>Ederius<br>Sereina"},
				{"pos" : [  1208,   -489,  64], "title" : "<b>склад</b><br>Sun Serega"},
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
				{"pos" : [  2040, -504, 190], "title" : "<b>Ферма пороха</b><br>Sun Serega"},
				{"pos" : [  2100, -478,  40], "title" : "<b>Ферма скелетов</b><br>Sad_Moon"},
				{"pos" : [-12056, 7848,  63], "title" : "<b>Ферма гвардов</b><br>AlanFox"},
				{"pos" : [  1696,-1298, 150], "title" : "<b>Ферма жезела<br>Phoenics</b><br>sleepwalker"},
			],
			"nether" : [
				{"pos" : [-1600,  982, 250], "title" : "<b>Ферма свинозомби</b><br>Serfing"},
			],
			"nether_caves" : [
				{"pos" : [635, -395, 59], "title" : "<b>Ферма ифритов</b><br>временная<br>Как сюда попасть?<br>Хаха это уже не мои проблемы)))"},
				{"pos" : [171,  125, 50], "title" : "<b>Ферма ифритов</b><br>Sad_Moon"},
			],
			"pure_end" : [
				{"pos" : [800, 0, 0], "title" : "<b>Ферма житаков</b><br>Sun Serega"},
				{"pos" : [-775, 0, 0], "title" : "<b>Ферма Эндерменовый дождь</b><br>Sun Serega"},
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
				{"pos" : [   -5,-2148, 0], "title" : "Край#1"},
				{"pos" : [  532, 5147,26], "title" : "Край#2"},
				{"pos" : [-6866, 5333,24], "title" : "Край#3"},
				{"pos" : [ 8451,  -27,43], "title" : "Край#4"},
				{"pos" : [ 9408, 7003,36], "title" : "Край#5"},
			],
			"nether" : [
				{"pos" : [ 1175, 875, 128], "title" : "Край#5"},
				{"pos" : [  -38, 550, 130], "title" : "<b>Архипелаг следующих:</b><br>Onkel_SHiZA<br>WolfStein<br>Kuroneko_san"},
			],
			"nether_caves" : [
				{"pos" : [46.5, -53, 0], "title" : "<b>Общий дом</b><br>Sad_Moon"},
				{"pos" : [56, -37.5, 0], "title" : "<b>Замок следующих:</b><br>arhi<br>Lingnum"},
				{"pos" : [73, -37.5, 0], "title" : "<b>Замок следующих:</b><br>AlanFox<br>LittleFox<br>Ederius<br>Sereina"},
				{"pos" : [265, -58, 0], "title" : "<b>Зона временных ферм</b><br>Ферма пороха(и ниток)<br>Ферма скелетов<br>порт дето тут, надо бы точные корды"},
				
				{"pos" : [    6, -264, 0], "title" : "Порт в край #1"},
				{"pos" : [   63,  645,97], "title" : "Порт в край #2"},
				{"pos" : [ -867,  657,34], "title" : "Порт в край #3"},
				{"pos" : [ 1049,   49, 5], "title" : "Порт в край #4"},
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
				{"pos" : [-892,1366,63], "title" : "ЧОЗАНАХУЙБЛЯТЬ"},
			],
		},
	},
	{
		"id" : "Ocean Monument's",
		"name" : "Морские данжи",
		"icon" : "https://raw.githubusercontent.com/StrToInt/pure-markers/master/OcMonIcon.png",
		"iconSize" : [32, 32],
		"showDefault" : false,
		"markers" : {
			"pure" : [
				{"pos" : [  6808,  -432, 60], "title" : "<b>#00</b><br>Губок нет<br>не осушено"},
				{"pos" : [  6312,  -360, 60], "title" : "<b>#01</b><br>Губок нет<br>не осушено"},
				{"pos" : [  5864,  -344, 60], "title" : "<b>#02</b><br>Губок нет<br>не осушено"},
				{"pos" : [ -5048, -4313, 60], "title" : "<b>#03</b><br>Губок нет<br>не осушено"},
				{"pos" : [-12062,  4797, 60], "title" : "<b>#04</b><br>Губок нет<br>не осушено"},
				{"pos" : [-11688,  7304, 60], "title" : "<b>#05</b><br>Губок нет<br>не осушено"},
				{"pos" : [   712,  4888, 60], "title" : "<b>#06</b><br>Губок нет<br>не осушено"},
				{"pos" : [-11080,  8040, 60], "title" : "<b>#07</b><br>Губок нет<br>не осушено"},
				{"pos" : [  4312,   104, 60], "title" : "<b>#08</b><br>Губок нет<br>не осушено"},
				{"pos" : [  5256,  -248, 60], "title" : "<b>#09</b><br>Губок нет<br>не осушено"},
				{"pos" : [  1224, -2424, 60], "title" : "<b>#0A</b><br>Губок нет<br>не осушено"},
				{"pos" : [   872, -3416, 60], "title" : "<b>#0B</b><br>Губок нет<br>не осушено"},
				{"pos" : [ -5400,  1416, 60], "title" : "<b>#0C</b><br>Губок нет<br>не осушено"},
				{"pos" : [-17512,  7912, 60], "title" : "<b>#0D</b><br>Губок нет<br>не осушено"},
				{"pos" : [-14552,  9944, 60], "title" : "<b>#0E</b><br>Губок нет<br>не осушено"},
				{"pos" : [ -2696,  5768, 60], "title" : "<b>#0F</b><br>Губок нет<br>не осушено"},
				{"pos" : [ -1416,  4280, 60], "title" : "<b>#10</b><br>Губок нет<br>не осушено"},
				{"pos" : [ -1288,  3912, 60], "title" : "<b>#11</b><br>Губок нет<br>не осушено"},
				{"pos" : [  -888,  3368, 60], "title" : "<b>#12</b><br>Губок нет<br>не осушено"},
				{"pos" : [  -376,  3368, 60], "title" : "<b>#13</b><br>Губок нет<br>не осушено"},
				{"pos" : [   344,  2760, 60], "title" : "<b>#14</b><br>Губок нет<br>не осушено"},
				{"pos" : [   264,  2296, 60], "title" : "<b>#15</b><br>Губок нет<br>не осушено"},
				{"pos" : [  1224, 10888, 60], "title" : "<b>#16</b><br>Губок нет<br>не осушено"},
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
				
				{"pos" : [-56, -77, 75], "title" : "<b>Гейт IN-2</b><br>[Закрыт]"},
				{"pos" : [-29, -91, 75], "title" : "<b>Гейт IN-1</b><br>[Закрыт]"},
				{"pos" : [+00, -96, 75], "title" : "<b>Гейт IN+0</b><br>[Закрыт]"},
				{"pos" : [+29, -91, 75], "title" : "<b>Гейт IN+1</b><br>[Закрыт]"},
				{"pos" : [+56, -77, 75], "title" : "<b>Гейт IN+2</b><br>[Новые земли]"},
				
				{"pos" : [+77, -56, 75], "title" : "<b>Гейт IE-2</b><br>[Ферма железа]"},
				{"pos" : [+91, -29, 75], "title" : "<b>Гейт IE-1</b><br>[Закрыт]"},
				{"pos" : [+96, +00, 75], "title" : "<b>Гейт IE+0</b><br>[Ферма житаков]"},
				{"pos" : [+91, +29, 75], "title" : "<b>Гейт IE+1</b><br>[Новые земли]"},
				{"pos" : [+77, +56, 75], "title" : "<b>Гейт IE+2</b><br>[Закрыт]"},
				
				{"pos" : [+56, +77, 75], "title" : "<b>Гейт IS-2</b><br>[Новые земли]"},
				{"pos" : [+29, +91, 75], "title" : "<b>Гейт IS-1</b><br>[Закрыт]"},
				{"pos" : [+00, +96, 75], "title" : "<b>Гейт IS+0</b><br>[Новые земли]"},
				{"pos" : [-29, +91, 75], "title" : "<b>Гейт IS+1</b><br>[Закрыт]"},
				{"pos" : [-56, +77, 75], "title" : "<b>Гейт IS+2</b><br>[Закрыт]"},
				
				{"pos" : [-77, +56, 75], "title" : "<b>Гейт IW-2</b><br>[Закрыт]"},
				{"pos" : [-91, +29, 75], "title" : "<b>Гейт IW-1</b><br>[Новые земли]"},
				{"pos" : [-96, +00, 75], "title" : "<b>Гейт IW+0</b><br>[Ферма эндерменов]"},
				{"pos" : [-91, -29, 75], "title" : "<b>Гейт IW+1</b><br>[Закрыт]"},
				{"pos" : [-77, -56, 75], "title" : "<b>Гейт IW+2</b><br>[Закрыт]"},
				
				
				//{"pos" : [     ,     ,   ], "title" : "<b>Гейт ON-2</b><br>[]"},
				//{"pos" : [     ,     ,   ], "title" : "<b>Гейт ON-1</b><br>[]"},
				//{"pos" : [     ,     ,   ], "title" : "<b>Гейт ON+0</b><br>[]"},
				//{"pos" : [     ,     ,   ], "title" : "<b>Гейт ON+1</b><br>[]"},
				{"pos" : [ +615, -800, 69], "title" : "<b>Гейт ON+2</b><br>[Новые земли]"},
				
				{"pos" : [ +693, -511, 85], "title" : "<b>Гейт OE-2</b><br>[Ферма железа]"},
				//{"pos" : [     ,     ,   ], "title" : "<b>Гейт OE-1</b><br>[]"},
				{"pos" : [ +767,   -1, 40], "title" : "<b>Гейт OE+0</b><br>[Ферма житаков]"},
				{"pos" : [+1009, +304, 67], "title" : "<b>Гейт OE+1</b><br>[Новые земли]"},
				//{"pos" : [     ,     ,   ], "title" : "<b>Гейт OE+2</b><br>[]"},
				
				{"pos" : [  576,  821, 71], "title" : "<b>Гейт OS-2</b><br>[Новые земли]"},
				//{"pos" : [     ,     ,   ], "title" : "<b>Гейт OS-1</b><br>[]"},
				{"pos" : [  -16,+1007, 69], "title" : "<b>Гейт OS+0</b><br>[Новые земли]"},
				//{"pos" : [     ,     ,   ], "title" : "<b>Гейт OS+1</b><br>[]"},
				//{"pos" : [     ,     ,   ], "title" : "<b>Гейт OS+2</b><br>[]"},
				
				//{"pos" : [     ,     ,   ], "title" : "<b>Гейт OW-2</b><br>[]"},
				{"pos" : [-1075, +328, 71], "title" : "<b>Гейт OW-1</b><br>[Новые земли]"},
				{"pos" : [ -773,   -3, 85], "title" : "<b>Гейт OW+0</b><br>[Ферма эндерменов]"},
				//{"pos" : [     ,     ,   ], "title" : "<b>Гейт OW+1</b><br>[]"},
				//{"pos" : [     ,     ,   ], "title" : "<b>Гейт OW+2</b><br>[]"},
				
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
				
				{"p1" : [+56, -77, 75], "p2" : [+77, -56, 75],"color" : "#FF0000","text":"IN+2-IE-2"},
				
				{"p1" : [+77, -56, 75], "p2" : [+96, +00, 75],"color" : "#FF0000","text":"IE-2-IE+0"},//skip 1	
				
				{"p1" : [+96, +00, 75], "p2" : [+91, +29, 75],"color" : "#FF0000","text":"IE+0-IE+1"},
				
				{"p1" : [+91, +29, 75], "p2" : [+56, +77, 75],"color" : "#FF0000","text":"IE+1-IS-2"},//skip 1
				
				{"p1" : [+56, +77, 75], "p2" : [+00, +96, 75],"color" : "#FF0000","text":"IS-2-IS+0"},//skip 1
				
				{"p1" : [+00, +96, 75], "p2" : [-91, +29, 75],"color" : "#FF0000","text":"IS+0-IW-1"},//skip 3
				
				{"p1" : [-91, +29, 75], "p2" : [-96, +00, 75],"color" : "#FF0000","text":"IW-1-IW+0"},
				
				{"p1" : [-96, +00, 75], "p2" : [+56, -77, 75],"color" : "#FF0000","text":"IW+0-IN+2"},//skip 6
				
				
				{"p1" : [+56, -77, 75], "p2" : [ +615, -800, 69],"color" : "#00FF00","text" : "<b>Путь гейта N+2</b><br>[Новые земли]"},
				
				{"p1" : [+77, -56, 75], "p2" : [ +693, -511, 85],"color" : "#00FF00","text" : "<b>Путь гейта E-2</b><br>[Ферма железа]"},
				{"p1" : [+96, +00, 75], "p2" : [ +767,   -1, 40],"color" : "#00FF00","text" : "<b>Путь гейта E+0</b><br>[Ферма житаков]"},
				{"p1" : [+91, +29, 75], "p2" : [+1009, +304, 67],"color" : "#00FF00","text" : "<b>Путь гейта E+1</b><br>[Новые земли]"},
				
				{"p1" : [+56, +77, 75], "p2" : [  576,  821, 71],"color" : "#00FF00","text" : "<b>Путь гейта S-2</b><br>[Новые земли]"},
				{"p1" : [+00, +96, 75], "p2" : [  -16,+1007, 69],"color" : "#00FF00","text" : "<b>Путь гейта S+0</b><br>[Новые земли]"},
				
				{"p1" : [-91, +29, 75], "p2" : [-1075, +328, 71],"color" : "#00FF00","text" : "<b>Путь гейта W-1</b><br>[Новые земли]"},
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
					[9183,6783],
					[9616,6783],
					[9616,7216],
					[9183,7216],
				],"color" : "#000000","fo" : 0.1,"text" : "<b>Зона для фермы бетона и слизи</b><br>Sun Serega"},
				{"p" : [
					[-13523,7644],
					[-13523,7913],
					[-13797,7913],
					[-13797,7644],
				],"color" : "#000000","fo" : 0.1,"text" : "<b>Зона для фермы ведьм</b><br>AlanFox"},
			],
		},
		
	},
];
