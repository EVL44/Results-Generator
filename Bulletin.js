

function ShowInfos() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let cne = document.getElementById('CNE').value;
    
    let db1 = document.getElementById('db1').value;
    let db2 = document.getElementById('db2').value;
    let ds1 = document.getElementById('ds1').value;
    let ds2 = document.getElementById('ds2').value;
    let os1 = document.getElementById('os1').value;
    let os2 = document.getElementById('os2').value;
    let mt1 = document.getElementById('mt1').value;
    let mt2 = document.getElementById('mt2').value;

    let DB1 = parseFloat(db1);
    let DB2 = parseFloat(db2);
    let DS1 = parseFloat(ds1);
    let DS2 = parseFloat(ds2);
    let OS1 = parseFloat(os1);
    let OS2 = parseFloat(os2);
    let MT1 = parseFloat(mt1);
    let MT2 = parseFloat(mt2);

    let dba = (DB1 + DB2)/2; 
    let dsa = (DS1 + DS2)/2; 
    let osa = (OS1 + OS2)/2; 
    let mta = (MT1 + MT2)/2; 

    let tavrg = ( dba + dsa + osa + mta )/4;

    document.getElementById('fn').innerHTML = "<label> First Name : </label>" + fname;
    document.getElementById('ln').innerHTML = "<label> Last Name : </label>" + lname;
    document.getElementById('code').innerHTML = "<label> CNE : </label>"+cne;

    document.getElementById('dataBase1').innerHTML = db1;
    document.getElementById('dataBase2').innerHTML = db2;
    document.getElementById('dataStruct1').innerHTML = ds1;
    document.getElementById('dataStruct2').innerHTML = ds2;
    document.getElementById('opSys1').innerHTML = os1;
    document.getElementById('opSys2').innerHTML = os2;
    document.getElementById('math1').innerHTML = mt1;
    document.getElementById('math2').innerHTML = mt2;

    document.getElementById('dataBaseAvrg').innerHTML = dba;
    document.getElementById('dataStructAvrg').innerHTML = dsa;
    document.getElementById('opSysAvrg').innerHTML = osa;
    document.getElementById('mathAvrg').innerHTML = mta;

    document.getElementById('tAvrg').innerHTML = tavrg;

    console.log(typeof(db1));
    console.log(typeof(dba));
    console.log(typeof(tavrg));

}

window.thml2canvas = html2canvas;
window.jsPDF = window.jspdf.jsPDF;

function downloadPDF() {
    html2canvas(document.querySelector("#capture"),{
        allowTaint: true,
        useCORS: true,
        scale: 1
    }).then(canvas => {
        let image = canvas.toDataURL("image/png");
        let doc = new jsPDF();
        doc.setFont('system-ui');
        doc.getFontSize(11);
        doc.addImage(image,'PNG',7,19,195,105);
        doc.save("bulletin.pdf");
    });
}
