//create crossfilter() and we have one of these for the whole site.
queue()
.defer(d3.csv, "../data/population-growth/API_SP.POP.GROW_DS2_en_csv_v2_249927.csv")
.await(makeGraphs);

function makeGraphs(error, populationData) {
    var ndx = crossfilter(populationData);

    show_pop_growth(ndx);

    show_pop_growth_line(ndx);

    dc.renderAll;
}

//population growth bar graph - id = pop-growth
function show_pop_growth(ndx) {
    var dim = ndx.dimension(dc.pluck('Country Name'));
    var group = dim.group();

    dc.barChart("#pop-growth")
        .width(400)
        .height(300)
        .margins({top:10, right:50, bottom:10, left:50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(dc.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Country Name")
        .yAxis().ticks(20)
        .yAxisLabel("Population Total")
}

//population growth line graph - id = pop-growth

function show_pop_growth_line(ndx){
    var dim = ndx.dimension(dc.pluck(''))

}
