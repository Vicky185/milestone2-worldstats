//#percent-stackChart

queue()
    .defer(d3.csv, "data/population-total/popMaleFemale.csv")
    .await(makeStackGraph);

function makeStackGraph(error, popData) {
    var ndx = crossfilter(popData);


    stackMaleFemale(ndx);

    dc.renderAll();

}

function stackMaleFemale(ndx) {

    var dim = ndx.dimension(dc.pluck('date'));

    var popMale_per_year = dim.group().reduceSum(dc.pluck('popM'));
    var popFemale_per_year = dim.group().reduceSum(dc.pluck('popF'));


    dc.barChart("#percent-stackChart")
        .width(1200)
        .height(600)
        .dimension(dim)
        .group(popMale_per_year, "Male")
        .stack(popFemale_per_year, "Female")
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .margins({ top: 50, right: 30, bottom: 50, left: 30 })
        .renderHorizontalGridLines(true)
        .xAxisLabel("Date")
        .yAxisLabel("Population Total in Billions")
        .legend(dc.legend().x(80).y(20).itemHeight(15).gap(15))
        .margins().right = 100;
}
