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

    var popMale_per_year = dim.group().reducem(dc.pluck('popM'));
    var popFemale_per_year = dim.group().reduce(dc.pluck('popF'));

    dc.barChart("#percent-stackChart")
        .width(1200)
        .height(600)
        .dimension(dim)
        .group(percentMaleByYear, "Male")
        .stack(percentFemaleByYear, "Female")
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(420).y(0).itemHeight(15).gap(5))
        .margins().right = 100;
}

