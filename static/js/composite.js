// #compositeChart

queue()
    .defer(d3.csv, "data/population-total/popMaleFemale.csv")
    .await(makeCompGraph);

function makeCompGraph(error, popData) {
    var ndx = crossfilter(popData);

    showCompChart(ndx);

    dc.renderAll();

}

function showCompChart(ndx) {

    var dim = ndx.dimension(dc.pluck('date'));

    var popMale = dim.group().reduceSum(dc.pluck('popM'));
    var popFemale = dim.group().reduceSum(dc.pluck('popF'));

    var compositeChart = dc.compositeChart('#compositeChart');

    compositeChart
        .width(1200)
        .height(600)
        .dimension(dim)
        .group(popMale)
        .group(popFemale)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .compose([
            dc.lineChart(compositeChart)
            .group(popMale, "Male")
            .colors('blue')
            .dashStyle([2, 2]),
            dc.lineChart(compositeChart)
            .group(popFemale, "Female")
            .colors('red')
            .dashStyle([5, 5])
        ])
        .xAxisLabel("Date")
        .yAxisLabel("Total Population in Billions")
        .margins({ top: 50, right: 50, bottom: 50, left: 50 })
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(15))
        .renderHorizontalGridLines(true)
        .brushOn(false)
        .render();
}



//hint button

function show_hint(obj) {
    obj.innerHTML = "How about social, economic and cultural factors? Life Expectancy, Birth rates and Geographical factors.";
}

function hide_hint(obj) {
    obj.innerHTML = "Hint?";
}
