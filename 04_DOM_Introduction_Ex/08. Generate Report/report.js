function generateReport() {
    let tableHeader = document.querySelectorAll('thead tr th');
    let tableRow = document.querySelectorAll('tbody tr');
    let res = [];

    for(let i = 0; i <tableRow.length; i++) {
        //tableData is collection of td -> [td,td,td...]
        let tableData = tableRow[i].cells;
        let tempData = {};

        for(let z = 0; z < tableData.length; z++) {
            //gets column header and checkbox
            let infoTHeader = tableHeader[z].childNodes;

            //if checkbox is checked
            if(infoTHeader[1].checked === true) {
                //use the column name as key    ------ assing to it, the cell data
                tempData[infoTHeader[0].textContent.trim().toLocaleLowerCase()] = tableData[z].textContent;
            }
        }
        res.push(tempData);
    }

    //convert javascript object to JSON
    let jsonRes = JSON.stringify(res);
    //puts the json in the html output area
    document.getElementById('output').textContent = jsonRes;
}