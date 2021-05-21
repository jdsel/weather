document.addEventListener('DOMContentLoaded', function () {
    loadTable([]);
});

function loadTable(data) {
    const table = document.querySelector('table tbody');
    let tableHtml = "";


    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='6'>No Data</td></tr>"
    }

}