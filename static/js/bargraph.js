// #pop-total-bar

queue()
    .defer(d3.csv, "data/population-total/worldPop.csv")
    .await(makeGraphs);

function makeGraphs(error, worldData) {
    var ndx = crossfilter(worldData);

    barWorldGraph(ndx);

    dc.renderAll();

}

function barWorldGraph(ndx) {
    var dim = ndx.dimension(dc.pluck('date'));
    var total_population_per_year = dim.group().reduceSum(dc.pluck('population'));

    dc.barChart("#pop-total-bar")
        .width(1200)
        .height(600)
        .margins({ top: 30, right: 20, bottom: 30, left: 20 })
        .dimension(dim)
        .group(total_population_per_year)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Date")
        .yAxisLabel("Population Total in Millions")
        .yAxis().ticks(8);
}
