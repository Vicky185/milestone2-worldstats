//create crossfilter() and we have one of these for the whole site.

/*let worldPopData;

var XMLHttp = new XMLHttpRequest();
XMLHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        worldPopData = JSON.parse(this.responseText);
    }
};

XMLHttp.open("GET", "../data/population-total/worldPop.json", true);
XMLHttp.send();


queue()
            .defer(d3.json, "../data/population-total/worldPop.json")
            .await(makeGraphs);

        function makeGraphs(error, worldPopData) {
            var ndx = crossfilter(worldPopData);
            worldPopData.forEach(function(d) {
                d.year = parseYear(d.year);
            });
            var year_dim = ndx.dimension(dc.pluck('year'));
            var total_populaton_per_year = year_dim.group().reduceSum(dc.pluck('population'));
            var minYear = year_dim.bottom(1)[0].year;
            var maxYear = year_dim.top(1)[0].year;
            dc.lineChart("#pop-total")
                .width(1000)
                .height(300)
                .margins({ top: 10, right: 50, bottom: 30, left: 50 })
                .dimension(year_dim)
                .group(total_populaton_per_year)
                .transitionDuration(500)
                .x(d3.time.scale().domain([minYear, maxYear]))
                .xAxisLabel("Year")
                .yAxis().ticks(4);
            dc.renderAll();
        }*/

/*queue()
    .defer(d3.csv, "../data/population-total/world_pop_data.csv")
    .await(makeGraphs);

function makeGraphs(error, worldPopData) {
    var ndx = crossfilter(worldPopData);
    //  var worldPopData = 'data/population-total/world_pop_data.csv';


    show_population_lineTotal(ndx);
    show_population_barTotal(ndx);

    dc.renderAll();
}
*/

/*
function makeGraphs(error, worldPopData) {
    var ndx = crossfilter(worldPopData);
    var year_dim = ndx.dimension(dc.pluck('year'));
    //var total_population = year_dim.group().reduceSum(dc.pluck('population'));

    dc.lineChart('#pop-total')
        .width(500)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(year_dim)
        .group(population)
        .transitionDuration(1000)
        .x(d3.scale.linear())
        .xUnits(dc.units.linear)
        .xAxisLabel("Year")
        .yAxisLabel("Population")
        .yAxis().ticks(10);

    dc.renderAll();
}

function makeGraphs(worldPopData, error) {
    var ndx = crossfilter(worldPopData);

    var year_dim = ndx.dimension(dc.pluck('year'));
    var total_population = year_dim.group().reduceSum(dc.pluck('population'));
    var minYear = year_dim.bottom(1)[0].date;
    var maxYear = year_dim.top(1)[0].date;

    dc.lineChart('#pop-total')
        .width(1000)
        .height(500)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(year_dim)
        .group(total_population)
        .transitionDuration(500)
        .x(d3.time.scale().domain([minYear, maxYear]))
        .xAxisLabel("Year")
        .yAxisLabel("Population")
        .yAxis().ticks(5);

    dc.renderAll();
}



*/

// line graph showing the population total growing from 1960 - 2018

/*function show_population_lineTotal(ndx) {

    var year_dim = ndx.dimension(dc.pluck('year'));
    var total_population = year_dim.group('population');

    dc.lineChart('#pop-total')
        .width(500)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(year_dim)
        .group(total_population)
        .transitionDuration(5000)
        .x(d3.scaleLinear())
        .xUnits(dc.units.linear)
        .elasticY(true)
        .xAxisLabel("Year")
        .yAxisLabel("Population")
        .yAxis().ticks(20);

}*/


// Alternative and interchangeable view to above showing bar chart

function show_population_barTotal(popData) {

    popData = [
        { year: "1960", population: 3032019978 },
        { year: "1961", population: 3073077563 },
        { year: "1962", population: 3126066253 },
        { year: "1963", population: 3191186048 },
        { year: "1964", population: 3256700083 },
        { year: "1965", population: 3323623700 },
        { year: "1966", population: 3393699205 },
        { year: "1967", population: 3463147267 },
        { year: "1968", population: 3533536526 },
        { year: "1969", population: 3608235815 },
        { year: "1970", population: 3683676306 },
        { year: "1971", population: 3761307048 },
        { year: "1972", population: 3837726171 },
        { year: "1973", population: 3913217944 },
        { year: "1974", population: 3989385034 },
        { year: "1975", population: 4063806523 },
        { year: "1976", population: 4136393107 },
        { year: "1977", population: 4208770941 },
        { year: "1978", population: 4282341460 },
        { year: "1979", population: 4357793599 },
        { year: "1980", population: 4434021975 },
        { year: "1981", population: 4512268962 },
        { year: "1982", population: 4593454253 },
        { year: "1983", population: 4675367633 },
        { year: "1984", population: 4756998073 },
        { year: "1985", population: 4840155168 },
        { year: "1986", population: 4925801334 },
        { year: "1987", population: 5013576387 },
        { year: "1988", population: 5102293348 },
        { year: "1989", population: 5190965222 },
        { year: "1990", population: 5281340078 },
        { year: "1991", population: 5369210095 },
        { year: "1992", population: 5453393960 },
        { year: "1993", population: 5538448726 },
        { year: "1994", population: 5622575421 },
        { year: "1995", population: 5707533023 },
        { year: "1996", population: 5790454220 },
        { year: "1997", population: 5873071768 },
        { year: "1998", population: 5954810550 },
        { year: "1999", population: 6035284135 },
        { year: "2000", population: 6115108363 },
        { year: "2001", population: 6194460444 },
        { year: "2002", population: 6273526441 },
        { year: "2003", population: 6352677699 },
        { year: "2004", population: 6432374971 },
        { year: "2005", population: 6512602867 },
        { year: "2006", population: 6593623202 },
        { year: "2007", population: 6675130418 },
        { year: "2008", population: 6757887172 },
        { year: "2009", population: 6840591577 },
        { year: "2010", population: 6922947261 },
        { year: "2011", population: 7004011262 },
        { year: "2012", population: 7086993625 },
        { year: "2013", population: 7170961674 },
        { year: "2014", population: 7255653881 },
        { year: "2015", population: 7340548192 },
        { year: "2016", population: 7426103221 },
        { year: "2017", population: 7510990456 },
        { year: "2018", population: 7594270356 },
    ];

    var svg = d3.select('svg');
    var svgContainer = d3.select('#pop-total-bar');

    var margin = 150;
    var width = 500;
    var height = 300;

    var popChart = svg.append('g')
        .attr('transform', `translate(${margin}, ${margin})`);

    var xScale = d3.scaleBand()
        .range([0, width])
        .domain(popData.map((s) => s.year))
        .padding(1);

    var yScale = d3.scaleLinear()
        .range([height, 0])
        .domain([0, 8.0]);

    var makeYLines = () => d3.axisLeft()
        .scale(yScale);

    popChart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

    popChart.append('g')
        .call(d3.axisLeft(yScale));

    popChart.append('g')
        .attr('class', 'grid')
        .call(makeYLines()
            .tickSize(-width, 0, 0)
            .tickFormat('')
        );

    var barGroups = popChart.selectAll()
        .data(popData)
        .enter()
        .append('g');

    barGroups
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (g) => xScale(g.year))
        .attr('y', (g) => yScale(g.population))
        .attr('height', (g) => height - yScale(g.population))
        .attr('width', xScale.bandwidth())
        .on('mouseenter', function(actual, i) {
            d3.selectAll('.population')
                .attr('opacity', 0);

            d3.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 0.6)
                .attr('x', (a) => xScale(a.year) - 5)
                .attr('width', xScale.bandwidth() + 10);

            var y = yScale(actual.population);

            line = popChart.append('line')
                .attr('id', 'limit')
                .attr('x1', 0)
                .attr('y1', y)
                .attr('x2', width)
                .attr('y2', y);

            barGroups.append('text')
                .attr('class', 'divergence')
                .attr('x', (a) => xScale(a.year) + xScale.bandwidth() / 2)
                .attr('y', (a) => yScale(a.population) + 30)
                .attr('fill', 'white')
                .attr('text-anchor', 'middle')
                .text((a, idx) => {
                    var divergence = (a.population - actual.population).toFixed(1);

                    let text = '';
                    if (divergence > 0) text += '+';
                    text += `${divergence}%`;

                    return idx !== i ? text : '';
                });

        })
        .on('mouseleave', function() {
            d3.selectAll('.population')
                .attr('opacity', 1);

            d3.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 1)
                .attr('x', (a) => xScale(a.year))
                .attr('width', xScale.bandwidth());

            chart.selectAll('#limit').remove()
            chart.selectAll('.divergence').remove()
        });

    barGroups
        .append('text')
        .attr('class', 'value')
        .attr('x', (a) => xScale(a.year) + xScale.bandwidth() / 2)
        .attr('y', (a) => yScale(a.population) + 30)
        .attr('text-anchor', 'middle')
        .text((a) => `${a.year}%`);

    svg
        .append('text')
        .attr('class', 'label')
        .attr('x', -(height / 2) - margin)
        .attr('y', margin / 2.4)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .text('Population Total (billions)');

    svg.append('text')
        .attr('class', 'label', 'rotate(-90)')
        .attr('x', width / 2 + margin)
        .attr('y', height + margin * 1.7)
        .attr('text-anchor', 'middle')
        .text('Date');

    svg.append('text')
        .attr('class', 'title')
        .attr('x', width / 2 + margin)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .text('Total Population Stats from 1960 - 2018');

    svg.append('text')
        .attr('class', 'source')
        .attr('x', width - margin / 2)
        .attr('y', height + margin * 1.7)
        .attr('text-anchor', 'start')
        .text('Source: UN Population Data Bank ');

}

show_population_barTotal();

/*  var year_dim = ndx.dimension(dc.pluck('year'));
    var total_population = year_dim.group('population');

    dc.barChart('#pop-total-bar')
        .width(500)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(year_dim)
        .group(total_population)
        .transitionDuration(500)
        .x(d3.scaleLinear())
        .xUnits(dc.units.linear)
        .xAxisLabel("Year")
        .yAxisLabel("Population")
        .yAxis().ticks(20);


}*/

/*
// want to have a button with function that switches between the two views
change_data_display();
// Generates a Random set of data and plots it as a bar chart
// Called once on page load, then each time the button is clicked.
function change_data_display() {
    return show_population_barTotal(); //it will be generate_barChartData()
}*/




/* timer of pop growth, births and deaths per day */

// create a donut chart

// timer within the chart

//window.on("load", function timers() {

//  var birthCount;
//  var deathCount;
///  var popGrowth = currentPop + birthCount - deathCount;

//  var currentPop = 7740137000;

// we need js to recognise the clock so that it can calculate how many births up to the current time, then also add on the no. of births per second function

//4 births every second
// 2 deaths every second
// for pop growth = current population + birth count - death count
// reset each day at midnight


//});

//function birthCount() {}

// at midnight the count starts and adds 4 every second --> i+=4



// function show population counter 

/*  function mainDate() {
      var generateToday = new Date();
      Date.now(generateToday.getYear(), generateToday.getMonth(), generateToday.getDate(), generateToday.getHours(), generateToday.getMinutes(), generateToday.getSeconds());
  }

  function changePopCount(number, pv) {
      let numberString = " ";
      let i = 0;
      let j = 0;

      while (number > 1) {
          numberString = (Math.round(number - 0.5) % 10) + numberString;
          number = number / 10;
          j++;
          if (number > 1 && j == 3) {
              numberString = "," + numberString;
              j = 0;
          }
          i++;
      }
      numberString = numberString;

      if (pv == 1) {
          document.getElementById("timer-pop").innerHTML = numberString;

      }
  }

  function popNow(year, month, date, hours, minutes, seconds) {
      let startDateCount = new Date(year, month, date, hours, minutes, seconds);

      var popNow = 5600000000.0;
      var popNow2 = 5690000000.0;
      var growthPercentage = (popNow2 - popNow) / popNow * 100;
      var growthPerSecond = (popNow * (growthPercentage / 100)) / 365.0 / 24.0 / 60.0 / 60.0;
      let nDate = new Date();
      let schedStartDate = new Date(19, 1, 1);
      let secondDate = (nDate.getTime() - startDateCount.getTime()) / 1000;
      let totalPopCount = (nDate.getTime() - schedStartDate.getTime()) / 1000 * growthPerSecond + popNow;
      changePopCount(totalPopCount, 1);



      timerID = setTimeout(popNow(startDateCount.getYear(), startDateCount.getMonth(), startDateCount.getDate(), startDateCount.getHours(), startDateCount.getMinutes(), startDateCount.getSeconds()), 200);

      window.onload = mainDate();

  }*/
