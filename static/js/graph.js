//create crossfilter() and we have one of these for the whole site.

queue()
    .defer(d3.csv, "../data/population-total/poptotal.csv")
    .await(makeGraphs);


function makeGraphs(error, worldPopData) {
    var ndx = crossfilter(worldPopData);
    
    show_pop_total(ndx);
    
    dc.renderAll();
}

function show_pop_total(ndx) {
    var year_dim = ndx.dimention(dc.pluck('1960'));
    var group = year_dim.group();
    
    dc.lineChart("#pop-total")
        .width(800)
        .height(500)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim_year)
        .group(year_dim)
        .transitionDuration(500)
        .x(d3.time.scale().linear())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Date")
        .elasticY(true)
        .yAxis().ticks(20)
        .yAxisLabel("Population Total");
        
}