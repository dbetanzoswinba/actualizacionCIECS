import XLSX from 'xlsx';
import axios from 'axios';

let dataExcel = []
function leerExcel(documento){
    const workbook = XLSX.readFile(documento);
    const workbookSheets = workbook.SheetNames;
    dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[workbookSheets[0]]);
    console.log('Datos listos');
}

leerExcel('./ciecs.xlsx'); 

dataExcel.forEach( async (elemento) =>{
    try{
            let res = await axios.put(`http://192.168.101.186:9085/company/${elemento.RFC}`,{ciec: elemento.CIEC});
        console.log(res.data);
    }catch(error){
        console.log(error);
    }
});