queue()
    .defer(d3.csv, "data/population-total/worldPop.csv")
    .await(makeGraphs);


d3.csv("data/population-total/worldPop.csv", function makeGraphs(error, worldPop) {

    var ndx = crossfilter(worldPop);

    show_population_lineTotal(ndx);
    show_population_barTotal(ndx);

    show_percent_gender(ndx);

    show_percent_stackGender(ndx);

    dc.renderAll();
});

// line graph showing the population total growing from 1960 - 2018

function show_population_lineTotal(ndx) {

    const worldPop = "data/population-total/worldPop.csv";

    worldPop.forEach(function(d) {
        d.date = parseDate(d.date);
    });

    var parseDate = d3.timeFormat("%Y-%m").parse;

    var date_dim = ndx.dimension(dc.pluck('date'));
    var total_population_per_date = date_dim.group().reduceSum(dc.pluck('population'));
    var minDate = date_dim.bottom(1)[0].date;
    var maxDate = date_dim.top(1)[0].date;
    dc.lineChart("#pop-total-line")
        .width(1200)
        .height(600)
        .margins({ top: 30, right: 20, bottom: 30, left: 20 })
        .dimension(date_dim)
        .group(total_population_per_date)
        .transitionDuration(500)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .xAxisLabel("Year")
        .y(d3.scaleLinear())
        .yAxis().ticks(10)
        .yAxisLabel("Population in Millions");
}

// Alternative and interchangeable view to above showing bar chart

function show_population_barTotal(ndx) {

    var margin = { top: 20, right: 20, bottom: 70, left: 40 },
        width = 1200 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    // Parse the date / time
    var parseDate = d3.time.format("%Y-%m").parse;

    var x = d3.scaleOrdinal().rangeRoundBands([0, width], .05);

    var y = d3.scaleLinear().range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickFormat(d3.time.format("%Y-%m"));

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("data/population-total/worldPop.csv", function(error, data) {
        data.forEach(function(d) {
            d.date = parseDate(d.date);
            d.value = +d.value;
        });

        x.domain(data.map(function(d) { return d.date; }));
        y.domain([0, d3.max(data, function(d) { return d.value; })]);
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-90)");

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Value ($)");

        svg.selectAll("bar")
            .data(data)
            .enter().append("rect")
            .style("fill", "#b4c5e4")
            .attr("x", function(d) { return x(d.date); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.value); })
            .attr("height", function(d) { return height - y(d.value); });
    });
}


// want to have a button with function that switches between the two views
change_data_display();

// Generates a Random set of data and plots it as a bar chart
// Called once on page load, then each time the button is clicked.
function change_data_display() {
    var changeData = document.getElementById("change-graph-btn");
    if (changeData.style.display === "block") {
        changeData.style.display = "none";
    }
    else {
        changeData.style.display = "none";
    }
}


//percentage gender of world population

function show_percent_gender(ndx) {
    var parseDate = d3.time.format("%Y-%m").parse;

    var worldPop = "data/population-total/worldPop.csv";

    worldPop.forEach(function(d) {
        d.date = parseDate(d.date);
    });
    var date_dim = ndx.dimension(dc.pluck('date'));
    var minDate = date_dim.bottom(1)[0].date;
    var maxDate = date_dim.top(1)[0].date;

    function percent_female(percentFemale) {
        return function(d) {
            if (d.date === date) {
                return +d.percentFemale;
            }
            else {
                return 0;
            }
        };
    }

    function percent_male(percentMale) {
        return function(d) {
            if (d.date === date) {
                return +d.percentMale;
            }
            else {
                return 0;
            }
        };
    }
    var percentFemaleByYear = date_dim.group().reduceSum(percent_female('percentFemale'));
    var percentMaleByYear = date_dim.group().reduceSum(percent_male('percentMale'));

    var compositeChart = dc.compositeChart('#percentage-compositeChart');
    compositeChart
        .width(1200)
        .height(600)
        .dimension(date_dim)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .xAxisLabel("Year")
        .yAxisLabel("Percentage (%) of Total World Population")
        .legend(dc.legend().x(80).y(20).itemHeight(20).gap(8))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(compositeChart)
            .colors('light-blue')
            .group(percentFemaleByYear, 'percentFemale'),
            dc.lineChart(compositeChart)
            .colors('blue')
            .group(percentMaleByYear, 'percentMale')
        ])
        .brushOn(false)
        .render();
}


//hint button

show_hint();
hide_hint();

function show_hint(obj) {
    obj.innerHTML = "How about social, economic and cultural factors? Life Expectancy, Sex ratios at birth and Geographical factors";
}

function hide_hint(obj) {
    obj.innerHTML = "Hint?";
}

function show_percent_stackGender(ndx) {

    //1960/2018 data specifically

    const min = d3.min(data, d => d.date);
    const max = d3.max(data, d => d.date);
    const extent = d3.extent(data, d => d.date);

    console.log(min, max, extent);

    var data = [
        { date: 1960, female: 49.97, male: 50.02 },
        { date: 2018, female: 49.58, male: 50.41 }
    ];

    function rankByFGender(dimension, female) {
        return data.dimension.group().reduce(
            function(p, v) {
                p.total++;
                if (v.female === female) {
                    p.match++;
                }
                return p;
            },
            function(p, v) {
                p.total--;
                if (v.female === female) {
                    p.match--;
                }
                return p;
            },
            function() {
                return { total: 0, match: 0 };
            }
        );
    }

    function rankByMGender(dimension, male) {
        return data.dimension.group().reduce(
            function(p, v) {
                p.total++;
                if (v.female === male) {
                    p.match++;
                }
                return p;
            },
            function(p, v) {
                p.total--;
                if (v.female === male) {
                    p.match--;
                }
                return p;
            },
            function() {
                return { total: 0, match: 0 };
            }
        );
    }



    var fgenderByDate = rankByFGender(data, "female");
    var mgenderByDate = rankByMGender(data, "male");

    dc.barChart("#percent-stackChart")
        .width(1000)
        .height(500)
        .dimension(data)
        .group(fgenderByDate, "female")
        .stack(mgenderByDate, "male")
        .valueAccessor(function(d) {
            if (d.value.total > 0) {
                return (d.value.match / d.value.total) * 100;
            }
            else {
                return 0;
            }
        })
        .x(d3.scaleOrdinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Year")
        .yAxisLabel("Percentage Female/Male of World Population")
        .legend(dc.legend().x(320).y(20).itemHeight(15).gap(5))
        .margins({ top: 10, right: 100, bottom: 30, left: 30 });
}

