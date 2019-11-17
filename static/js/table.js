//#population-table

queue()
    .defer(d3.csv, "data/population-total/popTotal.csv")
    .await(makeGraphs);

function makeGraphs(error, popData) {
    var ndx = crossfilter(popData);

    tablePopulationByCountry(ndx);

    dc.renderAll();

}


function tablePopulationByCountry(ndx) {

}




/*
function showHide_pop_table() {
    var popTable = document.getElementById("population_table");
    if (popTable.style.display === "none") {
        popTable.style.display = "block";
    }
    else {
        popTable.style.display = "none";
    }
}*/
