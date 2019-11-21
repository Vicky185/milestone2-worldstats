// #compositeChart

queue()
    .defer(d3.csv, "data/population-total/popMaleFemale.csv")
    .await(makeCompGraphs);

function makeCompGraphs(error, popData) {
    var ndx = crossfilter(popData);

    showCompositeChart(ndx);

    dc.renderAll();

}
function showCompositeChart(ndx) {
    var dim = ndx.dimension(dc.pluck('date'));

    var popMale_by_year = dim.group().reduceSum(dc.pluck('popM'));
    var popFemale_by_year = dim.group().reduceSum(dc.pluck('popF'));

    var compositeChart = dc.compositeChart("#compositeChart");

    compositeChart
        .width(1200)
        .height(600)
        .dimension(dim)
        .margins({ top: 30, right: 30, bottom: 30, left: 30 })
        .x(d3.scale.ordinal())
        .xAxisLabel("Date")
        .yAxisLabel("Total Population in Billions")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(compositeChart)
            .colors('blue')
            .group(popMale_by_year, 'Male')
            .dashStyle([2, 2]),
            dc.lineChart(compositeChart)
            .colors('red')
            .group(popFemale_by_year, 'Female')
            .dashStyle([5, 5]),
        ])
        .brushOn(false)
        .render();
}



//hint button

function show_hint(obj) {
    obj.innerHTML = "How about social, economic and cultural factors? Life Expectancy, Sex ratios at birth and Geographical factors";
}

function hide_hint(obj) {
    obj.innerHTML = "Hint?";
}
