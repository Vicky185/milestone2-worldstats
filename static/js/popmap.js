/*themes begin

am4core.useTheme(am4themes_animated);

//theme end

// creating map instance

var chart = am4core.create(document.getElementById('#popmap'), am4maps.MapChart);

// setting map definition
chart.geodata = am4geodata_worldLow;

// set projections
chart.projection = new am4maps.projections.Miller();

// series for world map
var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
worldSeries.exclude = ["AQ"];
worldSeries.useGeodata = true;

var polygonTemplate = worldSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = chart.colors.getIndex(0);
polygonTemplate.nonScalingStroke = true;

//hover state
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367b25"); */


// map

//apply data to map

//hover state - draw on map data and edits style - hovers change colour to darker tone





