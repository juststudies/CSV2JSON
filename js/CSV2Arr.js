function CSVToArray(strData, delimiter) {
    delimiter = (delimiter || ",");
    
    //Do "keys":"values"
    const objPattern = new RegExp((
    "(\\" + delimiter + "|\\r?\\n|\\r|^)" +
    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
    "([^\"\\" + delimiter + "\\r\\n]*))"), "gi");
    let arrData = [[]];
    let arrMatches = null;
    while (arrMatches = objPattern.exec(strData)) {
        let strMatchedDelimiter = arrMatches[1];
        if (strMatchedDelimiter.length && (strMatchedDelimiter != delimiter)) {
            arrData.push([]);
        }
    
        if (arrMatches[2]) {
            var strMatchedValue = arrMatches[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
            var strMatchedValue = arrMatches[3];
        }   
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    return (arrData);
}