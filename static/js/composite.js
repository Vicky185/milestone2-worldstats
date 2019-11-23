// #compositeChart

queue()
    .defer(d3.csv, "data/population-total/popMaleFemale.csv")
    .await(makeCompGraph);

function makeCompGraph(error, popData) {

    var ndx = crossfilter(popData);

    var dim = ndx.dimension(dc.pluck('date'));

    var popMale_per_year = dim.group().reduceSum(dc.pluck('popM'));
    var popFemale_per_year = dim.group().reduceSum(dc.pluck('popF'));

    var compositeChart = dc.compositeChart('#compositeChart');

    compositeChart
        .width(1200)
        .height(600)
        .x(d3.scale.ordinal())
        .xAxisLabel("Date")
        .yAxisLabel("Total Population in Billions")
        .margins({ top: 50, right: 30, bottom: 50, left: 30 })
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(15))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(compositeChart)
            .dimension(dim)
            .colors('blue')
            .group(popMale_per_year, "Male")
            .dashStyle([2, 2]),
            dc.lineChart(compositeChart)
            .dimension(dim)
            .colors('red')
            .group(popFemale_per_year, "Female")
            .dashStyle([5, 5]),
        ])
        .brushOn(false)
        .render();
    dc.renderAll();
}



//hint button

function show_hint(obj) {
    obj.innerHTML = "How about social, economic and cultural factors? Life Expectancy, Sex ratios at birth and Geographical factors";
}

function hide_hint(obj) {
    obj.innerHTML = "Hint?";
}
