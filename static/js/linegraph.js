// #pop-total-line

queue()
    .defer(d3.csv, "data/population-total/worldPop.csv")
    .await(makeLineGraph);

function makeLineGraph(error, worldData) {
    var ndx = crossfilter(worldData);

    lineWorldChart(ndx);

    dc.renderAll();

}

function lineWorldChart(ndx) {
        var dim = ndx.dimension(dc.pluck('date'));
    var total_population_per_year = dim.group().reduceSum(dc.pluck('population'));

    dc.lineChart("#pop-total-line")
        .width(1200)
        .height(500)
        .margins({ top: 30, right: 30, bottom: 30, left: 30 })
        .dimension(dim)
        .group(total_population_per_year)
        .renderHorizontalGridLines(true)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Date")
        .yAxisLabel("Population Total in Billions")
        .yAxis().ticks(8);
}
