//#population-table

queue()
    .defer(d3.csv, "data/population-total/popTotalCountry.csv")
    .await(makeGraphs);

function makeGraphs(error, popData) {
    var ndx = crossfilter(popData);

    tablePopulationByCountry(ndx);

    dc.renderAll();

}


function tablePopulationByCountry(ndx) {

}





function showHide_pop_table() {
    var showTable = document.getElementById("population_table");
    if (showTable.style.display === "none") {
        showTable.style.display = "block";
        document.getElementById("table-btn").innerHTML="Show Population Today for all Countries";
    }
    else {
        showTable.style.display = "block";
        showTable.style.display = "none";
        document.getElementById("table-btn").innerHTML="Hide Population Today for all Countries";
    }
}
