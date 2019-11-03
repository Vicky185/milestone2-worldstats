queue()
    .defer(d3.csv, "../data/population-total/pop-total.csv")
    .await(makeGraphs);

const popTotalData = "../data/population-total/pop-total.csv";

function makeGraphs(error, popTotalData) {
    var ndx = crossfilter(popTotalData);

    show_population_table(ndx);


    dc.renderAll();
}

function show_population_table(ndx) {


    // column definitions
    var columns = [
        { head: 'Country', cl: 'title', csv: ƒ('country') },
        { head: 'Population Total', cl: 'num', csv: ƒ('popTotal') },
        { head: 'Percentage Female', cl: 'num', csv: ƒ('percentPopFemale') },
        { head: 'Percentage Male', cl: 'num', csv: ƒ('percentPopMale', d3.format('$%')) },
    ];

    // create table
    var table = d3.select('tbody')
        .append('table');

    // create table header
    table.append('thead').append('tr')
        .selectAll('th')
        .data(columns).enter()
        .append('th')
        .attr('class', ƒ('c1'))
        .text(ƒ('head'));

    // create table body
    table.append('tbody')
        .selectAll('tr')
        .data(ndx).enter()
        .append('tr')
        .selectAll('td')
        .data(function(row, i) {
            return columns.map(function(c) {
                // compute cell values for this specific row
                var cell = {};
                d3.keys(c).forEach(function(k) {
                    cell[k] = typeof c[k] == 'function' ? c[k](row, i) : c[k];
                });
                return cell;
            });
        }).enter()
        .append('td')
        .html(ƒ('csv'))
        .attr('class', ƒ('cl'));

}


show_pop_table();

function show_pop_table() {
    
    document.getElementById('population-table').onclick = function() {
        document.getElementById("population-table").style.display = "block";
    }

}
