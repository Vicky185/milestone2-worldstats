// #pop-total-bar

queue()
    .defer(d3.csv, "data/population-total/worldPop.csv")
    .await(makeBarGraph);

function makeBarGraph(error, worldData) {
    var ndx = crossfilter(worldData);

    barWorldGraph(ndx);

    dc.renderAll();

}


function barWorldGraph(ndx) {
    var dim = ndx.dimension(dc.pluck('date'));
    var total_population_per_year = dim.group().reduceSum(dc.pluck('population'));

    dc.barChart("#pop-total-bar")
        .width(1200)
        .height(500)
        .margins({ top: 50, right: 30, bottom: 50, left: 30 })
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

function change_data_display() {
    var changeBar = document.getElementById("pop-total-bar");
    var changeLine = document.getElementById("pop-total-line");
    if (changeLine.style.display === "block") {
        changeLine.style.display = "none";
        changeBar.style.display = "block";
        document.getElementById("btn-text").innerHTML = "Let's go back to the line graph...";
    }
    else {
        changeLine.style.display = "block";
        changeBar.style.display = "none";
        document.getElementById("btn-text").innerHTML = "How about in a bar chart?";
    }
}
