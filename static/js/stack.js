//#percent-stackChart

queue()
    .defer(d3.csv, "data/population-total/worldPop.csv")
    .await(makeGraphs);

function makeGraphs(error, worldData) {
    var ndx = crossfilter(worldData);

    percentMaleFemaleStack(ndx);

    dc.renderAll();

}

function percentMaleFemaleStack(ndx) {

    var dim = ndx.dimension(dc.pluck('date'));

    var percentMaleByYear = dim.group().reduceSum(dc.pluck('percentMale'));
    var percentFemaleByYear = dim.group().reduceSum(dc.pluck('percentFemale'));

    dc.barChart("#percent-stackChart")
        .width(1200)
        .height(600)
        .dimension(dim)
        .group(percentMaleByYear, "% Male")
        .stack(percentFemaleByYear, "% Female")
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(420).y(0).itemHeight(15).gap(5))
        .margins().right = 100;
}
