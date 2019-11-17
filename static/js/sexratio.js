// #percentage-compositeChart

queue()
    .defer(d3.csv, "data/population-total/worldPop.csv")
    .await(makeGraphs);

function makeGraphs(error, worldData) {
    var ndx = crossfilter(worldData);

    sexRatioCompGraph(ndx);

    dc.renderAll();

}


function sexRatioCompGraph(ndx) {
    var dim = ndx.dimension(dc.pluck('date'));


    var percentMaleByYear = dim.group().reduceSum(dc.pluck('percentMale'));
    var percentFemaleByYear = dim.group().reduceSum(dc.pluck('percentFemale'));


    var compositeChart = dc.compositeChart("#percentage-compositeChart");
    compositeChart
        .width(1200)
        .height(600)
        .dimension(dim)
        .x(d3.scale.ordinal())
        .xAxisLabel("Date")
        .yAxisLabel("Percentage of Total Population")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(compositeChart)
            .colors('blue')
            .group(percentMaleByYear, '% Male'),
            dc.lineChart(compositeChart)
            .colors('dark-blue')
            .group(percentFemaleByYear, '% Female'),
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