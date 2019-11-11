d3.text("data/population-total/popTotal.csv", function(popTable) {

    var parsedCSV = d3.csv.parseRows(popTable);

    var container = d3.select("population_table")
        .append("table")
        .style("border-collapse", "collapse")
        .style("border", "2px black solid");

    d3.text("data.csv", function(data) {
        var parsedCSV = d3.csv.parseRows(data);

        var container = d3.select("body")
            .append("table")

            .selectAll("tr")
            .data(parsedCSV).enter()
            .append("tr")

            .selectAll("td")
            .data(function(d) { return d; }).enter()
            .append("td")
            .text(function(d) { return d; })
            .style("border", "1px black solid")
            .style("padding", "5px")
            .on("mouseover", function() { d3.select(this).style("background-color", "aliceblue") })
            .on("mouseout", function() { d3.select(this).style("background-color", "white") })
            .text(function(d) { return d; })
            .style("font-size", "12px");
    });
});

showHide_pop_table();

function showHide_pop_table() {
    var popTable = document.getElementById("population_table");
    if (popTable.style.display === "none") {
        popTable.style.display = "block";
    }
    else {
        popTable.style.display = "none";
    }
}
