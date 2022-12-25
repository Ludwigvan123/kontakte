
let kontakte=["","","","","","","","","","","",""];
let sortierteKontakte=[];
gleichsetzenderkontakte();

function gleichsetzenderkontakte(){   
    sortierteKontakte=[];
    for (let i=0;i<kontakte.length;i++){
        sortierteKontakte[i]=["","","","","","","","","","","",""];
        for (let j=0;j<13;j++){
            sortierteKontakte[i][j]=kontakte[i][j];
        }
    }    
}

let kontaktAusgewaehlt = 0;
 let kontaktedownload=0;

if (kontaktedownload===0){
    kontakteErhalten();
}




let tabellenTitel = ["_id","Name","Vorname","Firma","Email", "Geburt","Straße", "PLZ","Stadt", "Land","Tel","Web","Infos"];
let welcheTabellenElementeWerdenAngezeigt = [0,1,2,3,4,5,6,7,8,9,10,11,12];
let wievieleTabellenReihenWerdenAngezeigt = 50;

let abWecherNummerWerdenDieReihenAngezeigt = 0;
let welcheSeiteWirdAngezeigt =0;
let optionsmenuevisible=false;
let optionsmenueSpalteSelected = [true, true, true, true, true, true, true, true, true, true, true, true, true];

let tabelleWirdSortiertNachNummer =0;
let suchErgebnis = [];
let welcherBildschirmWirdAngezeigt="tabelle";




document.addEventListener('keydown', (event) => {
    let name = event.key;
    if (name=="Enter"){
        let suchString=document.getElementById("suche").value;
        if (suchString.length>1){            
            doSuche(suchString);
            wechselZuSuche();
            welcherBildschirmWirdAngezeigt="suche";
         }
    }

});



document.addEventListener('mouseover', (event) => {
    let name = event.target.id;
    let klasse = event.target.className;

    let nummer = parseInt(name.charAt(name.length-1));
    let vorLetzteNummer = parseInt(name.charAt(name.length-2));
    let vorVorLetzteNummer = parseInt(name.charAt(name.length-3));
    if (vorLetzteNummer){
        nummer+=10*vorLetzteNummer;
    }
    if (vorVorLetzteNummer){
        nummer+=100*vorVorLetzteNummer;
    }

    if (klasse=="tabelleninhalt tabellenklasse"){
        let lenght=getWieVieleTabellenElementeWerdenAngezeigt();
        for (let i=0;i<lenght;i++){
            let berechneRichtigeReihe=Math.floor((nummer)/welcheTabellenElementeWerdenAngezeigt.length);
            let number = (berechneRichtigeReihe*welcheTabellenElementeWerdenAngezeigt.length)+i
            document.getElementById("tabelleninhalt"+number).style="background-color:lightgrey;";
        }
    }
});


document.addEventListener('mouseout', (event) => {
    let name = event.target.id;
    let klasse = event.target.className;

    let nummer = parseInt(name.charAt(name.length-1));
    let vorLetzteNummer = parseInt(name.charAt(name.length-2));
    let vorVorLetzteNummer = parseInt(name.charAt(name.length-3));
    if (vorLetzteNummer){
        nummer+=10*vorLetzteNummer;
    }
    if (vorVorLetzteNummer){
        nummer+=100*vorVorLetzteNummer;
    }

    if (klasse=="tabelleninhalt tabellenklasse"){
        let lenght=getWieVieleTabellenElementeWerdenAngezeigt();
        for (let i=0;i<lenght;i++){
            let berechneRichtigeReihe=Math.floor((nummer)/welcheTabellenElementeWerdenAngezeigt.length);
            let number = (berechneRichtigeReihe*welcheTabellenElementeWerdenAngezeigt.length)+i
            document.getElementById("tabelleninhalt"+number).style="background-color:white;";
        }
    }



});


document.addEventListener('click', (event) => {    


    let name = event.target.id;
    let klasse = event.target.className;

    let nummer = parseInt(name.charAt(name.length-1));
    let vorLetzteNummer = parseInt(name.charAt(name.length-2));
    let vorVorLetzteNummer = parseInt(name.charAt(name.length-3));
    if (vorLetzteNummer){
        nummer+=10*vorLetzteNummer;
    }
    if (vorVorLetzteNummer){
        nummer+=100*vorVorLetzteNummer;
    }

    if (klasse=="tabelleninhalttitel"&&nummer>=0&&nummer<13){

        sortiereTabelle(welcheTabellenElementeWerdenAngezeigt[nummer]);
        tabelleWirdSortiertNachNummer=welcheTabellenElementeWerdenAngezeigt[nummer];
        welcheSeiteWirdAngezeigt=0;
        wechselZuTabelle();
    }


    if (klasse=="suchrahmeninner"||klasse=="sucheinhaltergebnis"||klasse=="sucheinhalt"){ 
        let kontaktAusgewaehlt2=suchErgebnis[nummer][0];
        for (let i=0;i<kontakte.length;i++){
            if (sortierteKontakte[i][0]===kontakte[kontaktAusgewaehlt2][0]){
                kontaktAusgewaehlt=i;
            }
        }
        wechselZuEdit();        
    }
     
    if (name=="logo"){       
        kontakteErhalten();
    }

    if (klasse=="tabelleninhalt tabellenklasse"){
        if (welcherBildschirmWirdAngezeigt!="bearbeiten"){
        let berechneRichtigeReihe=Math.floor((nummer)/welcheTabellenElementeWerdenAngezeigt.length);    
        let nummerFactor=berechneRichtigeReihe+(welcheSeiteWirdAngezeigt*wievieleTabellenReihenWerdenAngezeigt);    
        kontaktAusgewaehlt=nummerFactor-1;
        wechselZuEdit();        
        }        
    }
  

    if (klasse=="bearbeitenmenuesenden"){
        if (welcherBildschirmWirdAngezeigt=="neu"){
                fuegeCustomerHinzu();
            }else{
                
                speichereCustomer();
            }                       
            
        sortiereTabelle(welcheTabellenElementeWerdenAngezeigt[tabelleWirdSortiertNachNummer]);
        wechselZuTabelle();
    }
    if (klasse=="bearbeitenmenueabbrechen"){
        wechselZuTabelle();
    }

    if (klasse=="bearbeitenmenueloeschen"){
        loescheCustomer(kontaktAusgewaehlt);
    }

    


    if (name=="optionsmenueitemB0"){
        wievieleTabellenReihenWerdenAngezeigt=10;
        welcheSeiteWirdAngezeigt=0;
        wechselZuTabelle();
    }
    if (name=="optionsmenueitemB1"){
        wievieleTabellenReihenWerdenAngezeigt=25;
        welcheSeiteWirdAngezeigt=0;
        wechselZuTabelle();
    }
    if (name=="optionsmenueitemB2"){
        wievieleTabellenReihenWerdenAngezeigt=50;
        welcheSeiteWirdAngezeigt=0;
        wechselZuTabelle();
    }
    if (name=="optionsmenueitemB3"){
        wievieleTabellenReihenWerdenAngezeigt=75;
        welcheSeiteWirdAngezeigt=0;
        wechselZuTabelle();
    }
    if (name=="optionsmenueitemB4"){
        wievieleTabellenReihenWerdenAngezeigt=100;
        welcheSeiteWirdAngezeigt=0;
        wechselZuTabelle();
    }



    if (name=="kreisrechts"){
            wechselZuEdit("neu");
    }


    if (name=="kreislinks"){
        if (document.getElementById("optionsmenue")){
            
        }else{
            erstelleOptionsmenue();
        }


        if(optionsmenuevisible){
            document.getElementById("optionsmenue").style="display:none;";
            optionsmenuevisible=false;
            let text = "Optionen";
        }else{
            document.getElementById("optionsmenue").style="display:flex;";
            optionsmenuevisible=true;
            let text = "Optionen";
        }
        
    }

    if (klasse==="navigationsbutton"){
         let anzahlSeiten = Math.floor((kontakte.length-1)/wievieleTabellenReihenWerdenAngezeigt);
       
        if (name==="navigationsbuttonlinks"){
            if (welcheSeiteWirdAngezeigt>0){
                welcheSeiteWirdAngezeigt--;
                wechselZuTabelle();
            }
            
        }
        if (name==="navigationsbuttonrechts"){
            if (welcheSeiteWirdAngezeigt<anzahlSeiten){
                welcheSeiteWirdAngezeigt++;
                 wechselZuTabelle();
            }
            
        }
    }


});



 

window.onresize = function () {
    fensterGroesseUmsetzen()
}

function fensterGroesseUmsetzen(){
    let matchMedia0 = window.matchMedia('(max-width: 200px)');
    let matchMedia1 = window.matchMedia('(max-width: 300px)');
    let matchMedia2 = window.matchMedia('(max-width: 400px)');
    let matchMedia3 = window.matchMedia('(max-width: 500px)');
    let matchMedia4 = window.matchMedia('(max-width: 600px)');
    let matchMedia5 = window.matchMedia('(max-width: 700px)');
    let matchMedia6 = window.matchMedia('(max-width: 800px)');
    let matchMedia7 = window.matchMedia('(max-width: 900px)');
    let matchMedia8 = window.matchMedia('(max-width: 1000px)');
    let matchMedia9 = window.matchMedia('(max-width: 1100px)');
    let matchMedia10 = window.matchMedia('(max-width: 1200px)');
    let matchMedia11 = window.matchMedia('(max-width: 1300px)');
    if (matchMedia0.matches) {
        zeigeWenigerReihenAn(0);
    }else if (matchMedia1.matches) {
        zeigeWenigerReihenAn(1);
    }else if (matchMedia2.matches) {
        zeigeWenigerReihenAn(2);
    }else if (matchMedia3.matches) {
        zeigeWenigerReihenAn(3);
    }else if (matchMedia4.matches) {
        zeigeWenigerReihenAn(4);
    }else if (matchMedia5.matches) {
        zeigeWenigerReihenAn(5);
    }else if (matchMedia6.matches) {
        zeigeWenigerReihenAn(6);
    }else if (matchMedia7.matches) {
        zeigeWenigerReihenAn(7);
    }else if (matchMedia8.matches) {
        zeigeWenigerReihenAn(8);
    }else if (matchMedia9.matches) {
        zeigeWenigerReihenAn(9);
    }else if (matchMedia10.matches) {
        zeigeWenigerReihenAn(10);
    }else if (matchMedia11.matches) {
        zeigeWenigerReihenAn(11);
    }else{
        zeigeWenigerReihenAn(12);
    }
}


function zeigeWenigerReihenAn(wievieleReihenAnzeigen){
    //const rangfolgeDerElemente =           [12,0,1,2,3,10,8, 9,5,6,7,4,11];
    const echteRangfolgeDerElemente=[1,2,3,4,11,8,9,10,6,7,5,12,0];
    welcheTabellenElementeWerdenAngezeigt = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    welcheTabellenElementeWerdenAngezeigt=echteRangfolgeDerElemente;

     for (let i=12;i>wievieleReihenAnzeigen;i--){
         welcheTabellenElementeWerdenAngezeigt.splice(i,1);
     } 

    if (document.getElementById("tabellenrahmen")){
        wechselZuTabelle()
    }
    
}

function fuegeCustomerHinzu(){
    
     let newCustomerArray=[];
    for (let i=1;i<13;i++){
        newCustomerArray[i] = document.getElementById("bearbeitenmenueinput"+i).value;
     }

     kontakteSendenNeu(newCustomerArray);

    // kontakte.push(newCustomerArray); 
}


function speichereCustomer(){
    
   // kontakteSendenNeu(sortierteKontakte[kontaktAusgewaehlt]);
   let kontaktbearbeitet=[];
    for (let i=1;i<13;i++){
       //kontakte[sortierteKontakte[kontaktAusgewaehlt][0]][i-1] = document.getElementById("bearbeitenmenueinput"+i).value;
       kontaktbearbeitet[i] = document.getElementById("bearbeitenmenueinput"+i).value;
    }

    kontakteSendenBearbeiten(kontaktbearbeitet,sortierteKontakte[kontaktAusgewaehlt][0]);
}





function sortiereTabelle(nummer){    
	gleichsetzenderkontakte();	
	sortierteKontakte.sort(function(a, b){
		let x = a[nummer].toLowerCase();
		let y = b[nummer].toLowerCase();
		if (x < y) {return -1;}
		if (x > y) {return 1;}
		return 0;
	});
	
}



function loescheElement(idVonParent,klasseVonChilds){
    if (document.getElementsByClassName(klasseVonChilds)&&document.getElementById(idVonParent)){

  
        let el= document.getElementsByClassName(klasseVonChilds);
        while(el.length > 0){
            el[0].parentNode.removeChild(el[0]);
        }
      
           document.getElementById(idVonParent).remove(); 
     
        
    }
}

function getWieVieleTabellenElementeWerdenAngezeigt(){
    return welcheTabellenElementeWerdenAngezeigt.length;
}




function erstelleBearbeitenmenue(neu){

    let currentCustomer=["","","","","","","","","","","",""];
    currentCustomer=sortierteKontakte[kontaktAusgewaehlt];

    erstelleElement("div", "bearbeitenmenue", "body", "", "");
    erstelleElement("div", "bearbeitenmenueinner", "bearbeitenmenue", "", "");
    

    if (neu){
            erstelleElement("label", "bearbeitenmenuetitel", "bearbeitenmenueinner", "bearbeitenmenue bearbeitenmenuetitel", "Neuer Eintrag");
    }else{
        erstelleElement("label", "bearbeitenmenuetitel", "bearbeitenmenueinner", "bearbeitenmenue bearbeitenmenuetitel", "Bearbeiten der id: ");
        erstelleElement("label", "bearbeitenmenuetitel2", "bearbeitenmenueinner", "bearbeitenmenue bearbeitenmenuetitel", currentCustomer[0]);

    }
erstelleElement("div", "bearbeitenmenueinnergrid", "bearbeitenmenueinner", "", "");

    for (let i=1;i<13;i++){
        erstelleElement("label", "bearbeitenmenuelabel"+i, "bearbeitenmenueinnergrid", "bearbeitenmenuelabel", tabellenTitel[i]+": ");
        erstelleElement("input", "bearbeitenmenueinput"+i, "bearbeitenmenueinnergrid", "bearbeitenmenueinput", "");
        if (!neu){
             document.getElementById("bearbeitenmenueinput"+i).value=currentCustomer[i];
        }
        document.getElementById("bearbeitenmenuelabel"+i).htmlFor="bearbeitenmenueinput"+i;
      
    }
    erstelleElement("button", "bearbeitenmenuesenden", "bearbeitenmenueinner", "bearbeitenmenuesenden", "Speichern");
    erstelleElement("button", "bearbeitenmenueabbrechen", "bearbeitenmenueinner", "bearbeitenmenueabbrechen", "Abbrechen");
    if (!neu){
    erstelleElement("button", "bearbeitenmenueloeschen", "bearbeitenmenueinner", "bearbeitenmenueloeschen", "Löschen");
    }
}











function erstelleInformationsmenue(){
    erstelleElement("div", "informationsmenue", "body", "", "");
    erstelleElement("div", "navigationsbuttonlinks", "informationsmenue", "navigationsbutton", " < |");
    let von = abWecherNummerWerdenDieReihenAngezeigt+1+(welcheSeiteWirdAngezeigt*wievieleTabellenReihenWerdenAngezeigt);
    let bis=wievieleTabellenReihenWerdenAngezeigt+abWecherNummerWerdenDieReihenAngezeigt+(welcheSeiteWirdAngezeigt*wievieleTabellenReihenWerdenAngezeigt);

    if (bis>sortierteKontakte.length){
        bis=sortierteKontakte.length;
    }

    let navigationsText = von+" - "+ bis +" von "+sortierteKontakte.length+".";
    erstelleElement("div", "informationsmenuetext", "informationsmenue", "informationsmenuetext", navigationsText);


    erstelleElement("div", "navigationsbuttonrechts", "informationsmenue", "navigationsbutton", "| > ");
}


function erstelleOptionsmenue(){
    erstelleElement("div", "optionsmenue", "body", "", "");
    erstelleElement("div", "optionsmenueinner", "optionsmenue", "", "");
    erstelleElement("div", "optionsmenuetextB", "optionsmenueinner", "", "Wieviele Ergebnisse pro Seite: ");
    erstelleElement("div", "optionsmenueinner2", "optionsmenueinner", "", "");
    erstelleElement("div", "optionsmenueitemB0", "optionsmenueinner2", "optionsmenueitemB", "10 |");
    erstelleElement("div", "optionsmenueitemB1", "optionsmenueinner2", "optionsmenueitemB", "25 |");
    erstelleElement("div", "optionsmenueitemB2", "optionsmenueinner2", "optionsmenueitemB", "50 |");
    erstelleElement("div", "optionsmenueitemB3", "optionsmenueinner2", "optionsmenueitemB", "75 |");
    erstelleElement("div", "optionsmenueitemB4", "optionsmenueinner2", "optionsmenueitemB", "100 |");

  
 
}


function getElementTextInhaltTabelle(wieVieleTabellenElementeWerdenAngezeigt,i,j,position){

     if (i>=wieVieleTabellenElementeWerdenAngezeigt){ 
        
        let verschonebenePosition=welcheTabellenElementeWerdenAngezeigt[j];

        
        if (j>=0&&sortierteKontakte[position]&&verschonebenePosition>=0){
            return sortierteKontakte[position][verschonebenePosition];
        }
        if(sortierteKontakte[position]){
             return sortierteKontakte[position][0]; 
        }
          
       
        
    }else{
        return tabellenTitel[welcheTabellenElementeWerdenAngezeigt[i]];       
    }

}






function erstelleSuchErgebnisse(){   

    if (suchErgebnis.length>0){
        erstelleElement("div", "suchRahmen", "body","","");
        for (let i=0;i<suchErgebnis.length;i++){
            erstelleElement("div", "suchrahmeninner"+i, "suchRahmen","suchrahmeninner","");
            let elementTextInhalt = "Name: "+ kontakte[suchErgebnis[i][0]][1]+", "+kontakte[suchErgebnis[i][0]][2]+ ".";
            erstelleElement("div", "sucheinhalt"+i, "suchrahmeninner"+i, "sucheinhalt",elementTextInhalt);
            elementTextInhalt = tabellenTitel[suchErgebnis[i][1]] + ": " + kontakte[suchErgebnis[i][0]][suchErgebnis[i][1]];

            if (suchErgebnis[i].length>1){
                for (let j=2;j<suchErgebnis[i].length;j++){
                    elementTextInhalt += "| "+ tabellenTitel[suchErgebnis[i][j]] + ": " + kontakte[suchErgebnis[i][0]][suchErgebnis[i][j]]; 
                }
            }

            erstelleElement("div", "sucheinhaltergebnis"+i, "suchrahmeninner"+i, "sucheinhaltergebnis",elementTextInhalt);

        }
        
    }

    


}


function erstelleTabelle(){
     erstelleElement("div", "tabellenrahmen", "body","","");
     let wieVieleTabellenElementeWerdenAngezeigt = getWieVieleTabellenElementeWerdenAngezeigt();
     document.getElementById("tabellenrahmen").style="grid-template-columns: repeat("+wieVieleTabellenElementeWerdenAngezeigt+", minmax(0, 1fr));";
     let tabellenGroesse=wieVieleTabellenElementeWerdenAngezeigt*(wievieleTabellenReihenWerdenAngezeigt+1);
     let factor =kontakte.length-(welcheSeiteWirdAngezeigt*wievieleTabellenReihenWerdenAngezeigt);
     if (wievieleTabellenReihenWerdenAngezeigt>factor){
         tabellenGroesse=(factor+1)*(wieVieleTabellenElementeWerdenAngezeigt);
     }
 
     
     let j=-1;
     let position = -1;
     for (let i=0;i<tabellenGroesse;i++){   
         j++;
         if (j>=wieVieleTabellenElementeWerdenAngezeigt){
             position++;
             j=0;
         }     

         let positionFactor=position+(welcheSeiteWirdAngezeigt*wievieleTabellenReihenWerdenAngezeigt);
         let elementTextInhalt= getElementTextInhaltTabelle(wieVieleTabellenElementeWerdenAngezeigt,i,j,positionFactor);
         elementTextInhalt= kuerzeString(elementTextInhalt);
         erstelleElement("div", "tabelleninhalt"+i, "tabellenrahmen", "tabelleninhalt tabellenklasse",elementTextInhalt);
         if (position==-1){
             document.getElementById("tabelleninhalt"+i).style="font-size:20px;font-weight: bold;";
             document.getElementById("tabelleninhalt"+i).className="tabelleninhalttitel";
         }
         
     }
     
 }

function kuerzeString(txt){
    if (txt){
         const wievieleBuchstabenLassen=10;
    if (txt.length > wievieleBuchstabenLassen){
		let newTxt = "";	
		
		for (let character=0; character<wievieleBuchstabenLassen;character++){
			newTxt+=txt.charAt(character);
		}
		newTxt+="...";
		return newTxt;
		} else{
		return txt;
	}
    }
   
}


function erstelleElement(elementTyp, elementId, appendWo, elementKlasse, elementTextInhalt){
    const neuesElement = document.createElement(elementTyp);
    if (elementId){
    neuesElement.id=elementId;
    }   
    if (elementKlasse){
        neuesElement.className=elementKlasse;
    }

    document.getElementById(appendWo).appendChild(neuesElement);
    if (elementTextInhalt!==""&&elementTextInhalt!==undefined){
        const newContent = document.createTextNode(elementTextInhalt);
        neuesElement.appendChild(newContent);
    }
}




function loescheCustomer (num){
    let richtigePosition=sortierteKontakte[num][0];
    kontakteSendenLoeschen(richtigePosition);
}



function doSuche(suchtext){
	suchErgebnis=[];
	for (let i = 0; i < kontakte.length; i++){
        let nurEinErgebnisProCustomer=0;
        for (let j=0;j<12;j++){
            const currentcustomer = kontakte[i];
            
            let currentcustomerentry = currentcustomer[j]
            let searchterm  = new RegExp(suchtext, 'gi');
            let output = currentcustomerentry.match(searchterm);
            
            if (output&&nurEinErgebnisProCustomer==0){
                suchErgebnis.push([i,j]);
                nurEinErgebnisProCustomer++;
            }else if (output){
                suchErgebnis[suchErgebnis.length-1].push(j);
                nurEinErgebnisProCustomer++;
            }
        }
	}
}

function wechselZuTabelle(){
    document.getElementById("kreislinks").style="display:block;";
 

    loescheElement("tabellenrahmen","tabellenklasse");
    loescheElement("informationsmenue","informationsmenuetext");
    loescheElement("suchRahmen","sucheinhalt");
    loescheElement("bearbeitenmenue","bearbeitenmenue");
    erstelleInformationsmenue();
    erstelleTabelle();
    welcherBildschirmWirdAngezeigt="tabelle";
}

function wechselZuEdit(neu){
    document.getElementById("kreislinks").style="display:none;";
    document.getElementById("optionsmenue").style="display:none;";
    optionsmenuevisible=false;
    loescheElement("tabellenrahmen","tabellenklasse");
    loescheElement("informationsmenue","informationsmenuetext");
    loescheElement("suchRahmen","sucheinhalt");
    loescheElement("bearbeitenmenue","bearbeitenmenue");
    erstelleBearbeitenmenue(neu);
    if (neu=="neu"){
        welcherBildschirmWirdAngezeigt="neu";
    }else{
        welcherBildschirmWirdAngezeigt="bearbeiten";
    }
    
}

function wechselZuSuche(){
    document.getElementById("kreislinks").style="display:none;";
    document.getElementById("optionsmenue").style="display:none;";
    optionsmenuevisible=false;

    loescheElement("tabellenrahmen","tabellenklasse");
    loescheElement("informationsmenue","informationsmenuetext");
    loescheElement("suchRahmen","sucheinhalt");
    loescheElement("bearbeitenmenue","bearbeitenmenue");
    erstelleSuchErgebnisse();
    welcherBildschirmWirdAngezeigt="suche";
}



function kontakteSendenBearbeiten(kontakt,id){
    fetch('./index.html', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "sendemir": "kontaktebearbeiten", "id": id , "kontakt":kontakt})
    })
    .then(response => response.json())
    .then(response => {


        if (response==="success"){
            erfolg("Erfolgreich bearbeitet.");
            kontakteErhalten();
        }else{
            fehler("Fehler beim Bearbeiten.");
        }
    });
}



function kontakteSendenLoeschen(id){
    fetch('./index.html', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "sendemir": "kontakteloeschen", "id": id })
    })
    .then(response => response.json())
    .then(response => {

        if (response==="success"){
            erfolg("Erfolgreich gelöscht");
            kontakteErhalten();
        }else{
            fehler("Fehler beim Löschen.");
        }
    });
}


function kontakteSendenNeu(kontakt){
    fetch('./index.html', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "sendemir": "kontakteneu", "kontakt": kontakt })
    })
    .then(response => response.json())
    .then(response => {

        if (response==="success"){
            erfolg("Erfolgreich erstellt.");
            kontakteErhalten();
        }else{
            fehler("Fehler beim Erstellen.");
        }
    });
}

function kontakteErhalten(){
    fetch('./index.html', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "sendemir": "kontakte" })
    })
    .then(response => response.json())
    .then(response => {
        if (response!="error"){
            erfolg("Erfolgreich gelesen.");
        kontakte=[];
        kontakte=response;
        kontaktedownload=1;
        sortiereTabelle(1);
        wechselZuTabelle();
        }else{
            fehler("Fehler beim Lesen.");
        }
        
    });
}


function erfolg (text){
    document.getElementById("output").innerText=" ";
}

function fehler (text){
    document.getElementById("output").innerText=text;
}