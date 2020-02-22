const $buttonJSON = document.querySelector('#convert2json');
const $buttonCSV = document.querySelector('#convert2CSV')
const $CSV = document.querySelector('#CSV');
const $JSON = document.querySelector('#JSON');
const $msg = document.querySelector('.msg');

$buttonJSON.addEventListener('click', function(){
    let csv = $CSV.value;
    if(csv === ''){
        alert('Vazio mano');
        console.log('Tá vazio, não viu?');
    }else{
        let json = CSV2JSON(csv);
        $JSON.value =  json;  
    }
    
});

$buttonCSV.addEventListener('click', function(){
    let json = $JSON.value;
    if(json === ''){
        alert('vazio mano');
        console.log('Tá vazio, não viu?');
    }else{
        let csv = JSON2CSV(json);
        $CSV.value =  csv; 
    }
});
