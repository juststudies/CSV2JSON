function JSON2CSV(json){
    //if json < 0 causes unlimited looping
    if(json.length > 0 || json === undefined){

        //Verify if is an json string
        const jsonParsed = typeof json != 'object' ? JSON.parse(json) : json;
        let array = Array.isArray(jsonParsed) ? jsonParsed : [jsonParsed];
        let str = '';
        let line = '';
    
        //Make headers
        for(let i in array[0]){
            line += i + ',';
        }
    
        line = line.slice(0, -1);
        str += line + '\r\n';
    
        //Separate by comma (CSV)
        for(let i = 0; i<array.length; i++){
            let line = '';
            for(let j in array[i]){
                line += array[i][j] + ',';
            }
            line = line.slice(0, -1);
            str += line + '\r\n';
        }
    
        return str
    }else{
        console.log('Vazio manim');
    }
}