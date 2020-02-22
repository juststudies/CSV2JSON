function CSV2JSON(csv) {
    //if json < 0 causes unlimited looping
    if(csv.length >0 || csv === undefined){

        const array = CSVToArray(csv);
        let objArray = [];
        for (let i = 1; i < array.length; i++) {
            objArray[i - 1] = {};
            for (let k = 0; k < array[0].length && k < array[i].length; k++) {
                let key = array[0][k];
                objArray[i - 1][key] = array[i][k]
            }
        }
    
        let json = JSON.stringify(objArray);
        let str = json.replace(/},/g, "},\r\n");
    
        return str;
    }else{
        
        console.log('vazio manim');
    }
}
