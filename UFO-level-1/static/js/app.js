// from data.js
const tableData = data;

// Get table references
const tbody = d3.select("tbody");

// Clearing out existing data
// Loop each object in the data
// Append row and cells for each value
function showTable(tlbinfo) {
    tbody.html("");

    tlbinfo.forEach((dataRow) => {
        const row = tbody.append("tr");

        // Looping through each field in dataRow,
        // add each value as a table cell in "td"
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });
}

// Getting datetime input from filter
function clickMe() {
    const date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // When date is entered, it will check if the date match with 
    // the date in data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Show table matching the date entered
    // Original table will show if no date was entered
    showTable(filteredData);
}

// Button
d3.selectAll("#filter-btn").on("click", clickMe);

// Show table when webpage load
showTable(tableData);