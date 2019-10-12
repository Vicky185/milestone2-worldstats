//create crossfilter() and we have one of these for the whole site.

//queue()
//  .defer(d3.csv, '../data/population-total/totalpop.json')
//    .await(makeGraphs);



var worldPop = [
    { year: "1960", population: "3032019978" },
    { year: "1961", population: "3073077563" },
    { year: "1962", population: "3126066253" },
    { year: "1963", population: "3191186048" },
    { year: "1964", population: "3256700083" },
    { year: "1965", population: "3323623700" },
    { year: "1966", population: "3393699205" },
    { year: "1967", population: "3463147267" },
    { year: "1968", population: "3533536526" },
    { year: "1969", population: "3608235815" },
    { year: "1970", population: "3683676306" },
    { year: "1971", population: "3761307048" },
    { year: "1972", population: "3837726171" },
    { year: "1973", population: "3913217944" },
    { year: "1974", population: "3989385034" },
    { year: "1975", population: "4063806523" },
    { year: "1976", population: "4136393107" },
    { year: "1977", population: "4208770941" },
    { year: "1978", population: "4282341460" },
    { year: "1979", population: "4357793599" },
    { year: "1980", population: "4434021975" },
    { year: "1981", population: "4512268962" },
    { year: "1982", population: "4593454253" },
    { year: "1983", population: "4675367633" },
    { year: "1984", population: "4756998073" },
    { year: "1985", population: "4840155168" },
    { year: "1986", population: "4925801334" },
    { year: "1987", population: "5013576387" },
    { year: "1988", population: "5102293348" },
    { year: "1989", population: "5190965222" },
    { year: "1990", population: "5281340078" },
    { year: "1991", population: "5369210095" },
    { year: "1992", population: "5453393960" },
    { year: "1993", population: "5538448726" },
    { year: "1994", population: "5622575421" },
    { year: "1995", population: "5707533023" },
    { year: "1996", population: "5790454220" },
    { year: "1997", population: "5873071768" },
    { year: "1998", population: "5954810550" },
    { year: "1999", population: "6035284135" },
    { year: "2000", population: "6115108363" },
    { year: "2001", population: "6194460444" },
    { year: "2002", population: "6273526441" },
    { year: "2003", population: "6352677699" },
    { year: "2004", population: "6432374971" },
    { year: "2005", population: "6512602867" },
    { year: "2006", population: "6593623202" },
    { year: "2007", population: "6675130418" },
    { year: "2008", population: "6757887172" },
    { year: "2009", population: "6840591577" },
    { year: "2010", population: "6922947261" },
    { year: "2011", population: "7004011262" },
    { year: "2012", population: "7086993625" },
    { year: "2013", population: "7170961674" },
    { year: "2014", population: "7255653881" },
    { year: "2015", population: "7340548192" },
    { year: "2016", population: "7426103221" },
    { year: "2017", population: "7510990456" },
    { year: "2018", population: "7594270356" },
];


function show_pop_total(ndx) {

    //population growth line graph - id = pop-growth

    var ndx = crossfilter(worldPop);

    var year_dim = ndx.dimension(dc.pluck('year'));
    var total_population_per_year = ndx.dimension(dc.pluck('population'));
    var minYear = worldPop[0].year;
    var maxYear = worldPop[57].year;
    worldPop.forEach(function(d) {
        d.year = parseYear(d.year);
    });

    dc.lineChart("#pop-total")
        .width(1000)
        .height(500)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim_year)
        .dimension(total_population_per_year)
        .transitionDuration(500)
        .x(d3.time.scale().domain([minYear, maxYear]))
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Date")
        .yAxis().ticks(20)
        .yAxisLabel("Population Total");

    dc.renderAll();

}

function makeGraphs(error, totalpopData) {
    show_pop_total(ndx);

    dc.renderAll;


    //    show_pop_growth_line(ndx);
    //   show_pop_growth(ndx);


}


/*queue()
    .defer(d3.json, "../data/population-total/poptotal.csv")
    .await(makeGraphs);

//function makeGraphs(error, poptotalData) {

    var ndx = crossfilter(transactionsData);
    var parseDate = d3.time.format("%d/%m/%Y").parse;
    transactionsData.forEach(function(d) {
        d.date = parseDate(d.date);
    });

    dc.renderAll();
}
*/






//population growth line graph - id = pop-growth

//queue()
//    .defer(d3.json, "../data/population-total/poptotal.csv")
//    .await(makeGraphs);

//function makeGraphs(error, poptotalData) {

//   var ndx = crossfilter(transactionsData);
//   var parseDate = d3.time.format("%d/%m/%Y").parse;
//    transactionsData.forEach(function(d) {
//        d.date = parseDate(d.date);
//    });
//   var date_dim = ndx.dimension(dc.pluck('date'));
//   var total_spend_per_date = date_dim.group().reduceSum(dc.pluck('spend'));
//    var minDate = date_dim.bottom(1)[0].date;
//   var maxDate = date_dim.top(1)[0].date;
//   dc.lineChart("#chart-here")
//        .width(1000)
//        .height(300)
//        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
//        .dimension(date_dim)
//      .group(total_spend_per_date)
//       .transitionDuration(500)
//       .x(d3.time.scale().domain([minDate, maxDate]))
//       .xAxisLabel("Year")
//       .yAxis().ticks(4);
//   dc.renderAll();
