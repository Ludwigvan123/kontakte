let customers = [["Meier", "Peter", "google", "hallo@gmx.de", "5.2.94", "Hallostraße 4", "2456", "Dortmund", "D", "056745678", "www.google.com", "interessiert an CRM-Systemen"], ["Seifert", "Hans", "Seifert Inc.", "wrg@gmx.de", "2.6.77", "Gabelstr. 4", "78945", "Köln", "D", "9876543", "www.welt.de", ""],["Reise", "Jaqueline", "microsoft", "jack@gmail.com", "6.1.2015", "Weg 84", "245", "Interlaken", "D", "0222/76543456", "www.faz.net", "Hat Büro in New York"], ["Zeiss", "Gertrud", "Zeiss", "sdv@gmail.com", "4.6.88", "Heimatweg. 2", "6127", "Aachen", "D", "023457236", "www.werdegang.com", ""]];
customers.push(["Senf", "Hans", "Makler", "makler@gmx.de", "5.2.54", "Weltstr. 2", "4567", "Essen", "D", "6345673", "www.google.com", "interessiert an CRM-Systemen"]);
customers.push(["Müller","Sabine","","","","","","","","","",""]);
customers.push(["Ahle","Gerd","","","","","","","","","",""]);
customers.push(["Selbstmann","Frau","","","","","","","","","",""]);
customers.push(["Mundbruach","Gerald","","","","","","","","","",""]);
customers.push(["Tieze","Segar","","","","","","","","","",""]);
customers.push(["Seiler","Uwe","","","","","","","","","",""]);
customers.push(["Zeichen","Torsten","","","","","","","","","",""]);
customers.push(["Wertach","Gerold","","","","","","","","","",""]);
customers.push(["Istum","Hans","","","","","","","","","",""]);
customers.push(["Peters","Werner","","","","","","","","","",""]);
customers.push(["Lebertran","","","","","","","","","","",""]);
customers.push(["Ochse","","","","","","","","","","",""]);
customers.push(["Meyer","","","","","","","","","","",""]);
customers.push(["Meister","","","","","","","","","","",""]);
customers.push(["Gebhardt","","","","","","","","","","",""]);
customers.push(["Meisel","","","","","","","","","","",""]);
customers.push(["Ruby","","","","","","","","","","",""]);
customers.push(["Werner","","","","","","","","","","",""]);
customers.push(["Trinker","","","","","","","","","","",""]);
customers.push(["Teiler","","","","","","","","","","",""]);
customers.push(["Sabert","","","","","","","","","","",""]);
customers.push(["Torzt","","","","","","","","","","",""]);
customers.push(["Grutzke","","","","","","","","","","",""]);
customers.push(["Lebke","","","","","","","","","","",""]);
customers.push(["Kasimir","","","","","","","","","","",""]);
customers.push(["Hauser", "Hans", "Makler", "makler@gmx.de", "5.2.54", "Weltstr. 2", "4567", "Essen", "D", "6345673", "www.google.com", "interessiert an CRM-Systemen"]);
customers.push(["Garsten","Sabine","","","","","","","","","",""]);
customers.push(["Tele","Gerd","","","","","","","","","",""]);
customers.push(["Wieland","Frau","","","","","","","","","",""]);
customers.push(["Seiler","Gerald","","","","","","","","","",""]);
customers.push(["Zeissler","Segar","","","","","","","","","",""]);
customers.push(["Abrakadabra","Uwe","","","","","","","","","",""]);
customers.push(["Zusse","Torsten","","","","","","","","","",""]);
customers.push(["Busse","Gerold","","","","","","","","","",""]);
customers.push(["Christ","Hans","","","","","","","","","",""]);
customers.push(["Domann","Werner","","","","","","","","","",""]);
customers.push(["Erler","","","","","","","","","","",""]);
customers.push(["Fritze","","","","","","","","","","",""]);
customers.push(["Gusse","","","","","","","","","","",""]);
customers.push(["Heiland","","","","","","","","","","",""]);
customers.push(["Isar","","","","","","","","","","",""]);
customers.push(["Auster","","","","","","","","","","",""]);
customers.push(["Geblar","","","","","","","","","","",""]);
customers.push(["Qualle","","","","","","","","","","",""]);
customers.push(["Ulmer","","","","","","","","","","",""]);
customers.push(["Zedernholz","","","","","","","","","","",""]);
customers.push(["Parker","","","","","","","","","","",""]);
customers.push(["Kleist","","","","","","","","","","",""]);
customers.push(["Mann","","","","","","","","","","",""]);
customers.push(["Numinen","","","","","","","","","","",""]);
customers.push(["York","","","","","","","","","","",""]);
customers.push(["Zander","Gerd","","","","","","","","","",""]);
customers.push(["Hauser","Willi","","","","","","","","","",""]);
let sortierteCustomers=[];
gleichsetzenderCustomers();

function gleichsetzenderCustomers(){   
    for (let i=0;i<customers.length;i++){
        sortierteCustomers[i]=customers[i];
        sortierteCustomers[i][13]=i;
    }    
}

let customerAusgewaehlt = 0;



let tabellenTitel = ["Position","Name","Vorname","Firma","Email", "Geburt","Straße", "PLZ","Stadt", "Land","Tel","Web","Infos"];
let welcheTabellenElementeWerdenAngezeigt = [0,1,2,3,4,5,6,7,8,9,10,11,12];
//welcheTabellenElementeWerdenAngezeigt.splice(5,1);
let wievieleTabellenReihenWerdenAngezeigt = 50;

let abWecherNummerWerdenDieReihenAngezeigt = 0;
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


document.addEventListener('dblclick', (event) => {
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
        if (welcherBildschirmWirdAngezeigt!="bearbeiten"){
        let berechneRichtigeReihe=Math.floor((nummer)/welcheTabellenElementeWerdenAngezeigt.length);        
        customerAusgewaehlt=berechneRichtigeReihe-1;
        wechselZuEdit();        
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

    if (klasse=="tabelleninhalttitel"&&nummer>0&&nummer<13){
        sortiereTabelle(welcheTabellenElementeWerdenAngezeigt[nummer-1]);
        tabelleWirdSortiertNachNummer=nummer-1;
        wechselZuTabelle();
    }else if(nummer===0){
        gleichsetzenderCustomers();
        wechselZuTabelle();
    }


    if (klasse=="suchrahmeninner"||klasse=="sucheinhaltergebnis"||klasse=="sucheinhalt"){ 
        customerAusgewaehlt=suchErgebnis[nummer][0];
        console.log(nummer+" "+suchErgebnis[nummer][0]+"customerAusgewaehlt"+customerAusgewaehlt);              

        wechselZuEdit();        
    }
     
    if (name=="logo"){       
        wechselZuTabelle();
    }


  

    if (klasse=="bearbeitenmenuesenden"){
        if (welcherBildschirmWirdAngezeigt=="neu"){
                fuegeCustomerHinzu();
            }else{
                speichereCustomer();
            }                       
        sortiereTabelle(tabelleWirdSortiertNachNummer);
        wechselZuTabelle();
    }
    if (klasse=="bearbeitenmenueabbrechen"){
        wechselZuTabelle();
    }

    if (klasse=="bearbeitenmenueloeschen"){
             
        loescheCustomer(customerAusgewaehlt);
        sortiereTabelle(tabelleWirdSortiertNachNummer);
        wechselZuTabelle();
    }

    


    if (name=="optionsmenueitemB0"){
        wievieleTabellenReihenWerdenAngezeigt=10;
        wechselZuTabelle();
    }
    if (name=="optionsmenueitemB1"){
        wievieleTabellenReihenWerdenAngezeigt=25;
        wechselZuTabelle();
    }
    if (name=="optionsmenueitemB2"){
        wievieleTabellenReihenWerdenAngezeigt=50;
        wechselZuTabelle();
    }
    if (name=="optionsmenueitemB3"){
        wievieleTabellenReihenWerdenAngezeigt=75;
        wechselZuTabelle();
    }
    if (name=="optionsmenueitemB4"){
        wievieleTabellenReihenWerdenAngezeigt=100;
        wechselZuTabelle();
    }


    if (klasse=="optionsmenueitem"){  
        welcheTabellenElementeWerdenAngezeigt=[];
        if (nummer!=1){
             if(optionsmenueSpalteSelected[nummer]){
            optionsmenueSpalteSelected[nummer]=false;
            document.getElementById(name).style="background-color:grey;";
        }else{
            optionsmenueSpalteSelected[nummer]=true;
            document.getElementById(name).style="background-color:white;";
        }
        }
       
        loescheElement("tabellenrahmen","tabellenklasse");
        let whichposition=0;
        for (let i=0;i<13;i++){
            if(optionsmenueSpalteSelected[i]==true){
                welcheTabellenElementeWerdenAngezeigt[whichposition]=i;
                whichposition++;
            }
        }
        erstelleTabelle();
        
    }


    if (name=="kreisrechts"){
            wechselZuEdit("neu");
    }


    if (name=="kreislinks"){
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


});



  var matchMedia0 = window.matchMedia('(max-width: 400px)');
  var matchMedia1 = window.matchMedia('(max-width: 700px)');
  var matchMedia2 = window.matchMedia('(max-width: 1000px)');

window.onresize = function () {
    fensterGroesseUmsetzen()
}

function fensterGroesseUmsetzen(){
    if (matchMedia0.matches) {
        zeigeWenigerReihenAn(11);
    }else if (matchMedia1.matches) {
        zeigeWenigerReihenAn(8);
    }else if (matchMedia2.matches) {
        zeigeWenigerReihenAn(3);
    }else{
        zeigeWenigerReihenAn(0);
    }
}



function zeigeWenigerReihenAn(wievieleReihenNichtAnzeigen){
    welcheTabellenElementeWerdenAngezeigt = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    welcheTabellenElementeWerdenAngezeigt.splice(2,wievieleReihenNichtAnzeigen);
    if (document.getElementById("tabellenrahmen")){
        wechselZuTabelle()
    }
    
}

function fuegeCustomerHinzu(){
    let newCustomerArray=[];
    for (let i=1;i<13;i++){
        newCustomerArray[i-1] = document.getElementById("bearbeitenmenueinput"+i).value;
     }

     customers.push(newCustomerArray);
}


function speichereCustomer(){
    for (let i=1;i<13;i++){
       customers[sortierteCustomers[customerAusgewaehlt][13]][i-1] = document.getElementById("bearbeitenmenueinput"+i).value;
    }
}





function sortiereTabelle(nummer){
	gleichsetzenderCustomers();	
	sortierteCustomers.sort(function(a, b){
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

    let currentCustomer=[];
    if (welcherBildschirmWirdAngezeigt=="tabelle"){
        currentCustomer=sortierteCustomers[customerAusgewaehlt];
    }else if (welcherBildschirmWirdAngezeigt=="suche"){
        currentCustomer=customers[customerAusgewaehlt];
    }


    console.log(customerAusgewaehlt+"currentCustomer[13]: "+currentCustomer[13]);
    erstelleElement("div", "bearbeitenmenue", "body", "", "");
    erstelleElement("div", "bearbeitenmenueinner", "bearbeitenmenue", "", "");

    if (neu){
            erstelleElement("label", "bearbeitenmenuetitel", "bearbeitenmenueinner", "bearbeitenmenue bearbeitenmenuetitel", "Neuer Eintrag. ");

    }else{
        erstelleElement("label", "bearbeitenmenuetitel", "bearbeitenmenueinner", "bearbeitenmenue bearbeitenmenuetitel", "Bearbeiten der Position: "+currentCustomer[13]);

    }


    for (let i=1;i<13;i++){
        erstelleElement("label", "bearbeitenmenuelabel"+i, "bearbeitenmenueinner", "bearbeitenmenuelabel", tabellenTitel[i]+": ");
        erstelleElement("input", "bearbeitenmenueinput"+i, "bearbeitenmenueinner", "bearbeitenmenueinput", "");
        if (!neu){
             document.getElementById("bearbeitenmenueinput"+i).value=currentCustomer[i-1];
        }
      
    }
    erstelleElement("button", "bearbeitenmenuesenden", "bearbeitenmenueinner", "bearbeitenmenuesenden", "Speichern");
    erstelleElement("button", "bearbeitenmenueabbrechen", "bearbeitenmenueinner", "bearbeitenmenueabbrechen", "Abbrechen");
    if (!neu){
    erstelleElement("button", "bearbeitenmenueloeschen", "bearbeitenmenueinner", "bearbeitenmenueloeschen", "Löschen");
    }
}











function erstelleInformationsmenue(){
    erstelleElement("div", "informationsmenue", "body", "", "");
    let von = abWecherNummerWerdenDieReihenAngezeigt+1;
    let bis=wievieleTabellenReihenWerdenAngezeigt+abWecherNummerWerdenDieReihenAngezeigt;

    if (bis>sortierteCustomers.length){
        bis=sortierteCustomers.length;
    }

    let navigationsText = von+" - "+ bis +" von "+sortierteCustomers.length+".";
    erstelleElement("div", "informationsmenuetext", "informationsmenue", "informationsmenuetext", navigationsText);
}


function erstelleNavigationsmenue(){
    for (let i=0;i<10;i++){
        erstelleElement("div", "navigationsbutton"+i, "tabellenrahmen", "navigationsbutton", " "+i+" ");
    }
}





function erstelleOptionsmenue(){
    erstelleElement("div", "optionsmenue", "body", "", "");

    erstelleElement("div", "optionsmenuetextB", "optionsmenue", "", "Wieviele Ergebnisse pro Seite: ");
    erstelleElement("div", "optionsmenueitemB0", "optionsmenue", "optionsmenueitemB", "10");
    erstelleElement("div", "optionsmenueitemB1", "optionsmenue", "optionsmenueitemB", "25");
    erstelleElement("div", "optionsmenueitemB2", "optionsmenue", "optionsmenueitemB", "50");
    erstelleElement("div", "optionsmenueitemB3", "optionsmenue", "optionsmenueitemB", "75");
    erstelleElement("div", "optionsmenueitemB4", "optionsmenue", "optionsmenueitemB", "100");

    erstelleElement("div", "optionsmenuetext", "optionsmenue", "", "Auswahl der angezeigten Spalten: ");
    for (let i=0;i<14;i++){
        erstelleElement("div", "optionsmenueitem"+i, "optionsmenue", "optionsmenueitem", tabellenTitel[i]);
    }
 
  
 
}


function getElementTextInhaltTabelle(wieVieleTabellenElementeWerdenAngezeigt,i,j,position){

     if (i>=wieVieleTabellenElementeWerdenAngezeigt){ 
        
        let verschonebenePosition=welcheTabellenElementeWerdenAngezeigt[j]-1;

        
        if (j>=0&&sortierteCustomers[position]&&verschonebenePosition>=0){
            return sortierteCustomers[position][verschonebenePosition];
        }
        if(sortierteCustomers[position]){
             return sortierteCustomers[position][13]; 
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
            let elementTextInhalt = "Name: "+ customers[suchErgebnis[i][0]][0]+", "+customers[suchErgebnis[i][0]][1]+ ".";
            erstelleElement("div", "sucheinhalt"+i, "suchrahmeninner"+i, "sucheinhalt",elementTextInhalt);
            elementTextInhalt = tabellenTitel[suchErgebnis[i][1]+1] + ": " + customers[suchErgebnis[i][0]][suchErgebnis[i][1]];

            if (suchErgebnis[i].length>1){
                for (let j=2;j<suchErgebnis[i].length;j++){
                    elementTextInhalt += "| "+ tabellenTitel[suchErgebnis[i][j]+1] + ": " + customers[suchErgebnis[i][0]][suchErgebnis[i][j]]; 
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
    if (wievieleTabellenReihenWerdenAngezeigt>customers.length){
        tabellenGroesse=wieVieleTabellenElementeWerdenAngezeigt*(customers.length+1);
    }

    
    let j=-1;
    let position = -1;
    for (let i=0;i<tabellenGroesse;i++){   
        j++;
        if (j>=wieVieleTabellenElementeWerdenAngezeigt){
            position++;
            j=0;
        }     
        let elementTextInhalt= getElementTextInhaltTabelle(wieVieleTabellenElementeWerdenAngezeigt,i,j,position);
        elementTextInhalt= kuerzeString(elementTextInhalt);
        erstelleElement("div", "tabelleninhalt"+i, "tabellenrahmen", "tabelleninhalt tabellenklasse",elementTextInhalt);
        if (position==-1){
            document.getElementById("tabelleninhalt"+i).style="font-size:20px;font-weight: bold;";
            document.getElementById("tabelleninhalt"+i).className="tabelleninhalttitel";
        }
        
    }
    erstelleNavigationsmenue();
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
    let richtigePosition=sortierteCustomers[num][13];
	for (let i = richtigePosition; i < customers.length; i++){
		customers[i]=customers[i+1];
	}
	customers.pop();
	
}



function doSuche(suchtext){
	suchErgebnis=[];
	for (let i = 0; i < customers.length; i++){
        let nurEinErgebnisProCustomer=0;
        for (let j=0;j<12;j++){
            const currentcustomer = customers[i];
            
            let currentcustomerentry = currentcustomer[j]
            let searchterm  = new RegExp(suchtext, 'gi');
            let output = currentcustomerentry.match(searchterm);
            
            if (output&&nurEinErgebnisProCustomer==0){
                suchErgebnis.push([i,j]);
                nurEinErgebnisProCustomer++;
            }else if (output){
              //  suchErgebnis[suchErgebnis.length-1][nurEinErgebnisProCustomer+1]=j;
                suchErgebnis[suchErgebnis.length-1].push(j);
                nurEinErgebnisProCustomer++;
            }
        }
	}
}

function wechselZuTabelle(){
    loescheElement("tabellenrahmen","tabellenklasse");
    loescheElement("informationsmenue","informationsmenuetext");
    loescheElement("suchRahmen","sucheinhalt");
    loescheElement("bearbeitenmenue","bearbeitenmenue");
    erstelleInformationsmenue();
    erstelleTabelle();
    welcherBildschirmWirdAngezeigt="tabelle";
}

function wechselZuEdit(neu){
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
    loescheElement("tabellenrahmen","tabellenklasse");
    loescheElement("informationsmenue","informationsmenuetext");
    loescheElement("suchRahmen","sucheinhalt");
    loescheElement("bearbeitenmenue","bearbeitenmenue");
    erstelleSuchErgebnisse();
    welcherBildschirmWirdAngezeigt="suche";
}

