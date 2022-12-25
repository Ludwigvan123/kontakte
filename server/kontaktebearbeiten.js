let tabellenTitel = ["_id","Name","Vorname","Firma","Email", "Geburt","Straße", "PLZ","Stadt", "Land","Tel","Web","Infos"];
let neuerKontakt ={};
const { MongoClient , ObjectId } = require("mongodb");

function openClient(){  
  try{
  uri = "hidden";
  client = new MongoClient(uri);
  } catch (error0){
   console.log("an error occured: "+error0);
  }
}

function kontaktWechseln(kontakt){
  neuerKontakt = {
    Email: '',
    Firma: '',
    Geburt: '',
    Infos: '',
    Land: '',
    Name: '',
    PLZ: '',
    Stadt: '',
    Straße: '',
    Tel: '',
    Vorname: '',
    Web: ''
  };
  neuerKontakt.Name=kontakt[1];
  neuerKontakt.Email=kontakt[4];
  neuerKontakt.Firma=kontakt[3];
  neuerKontakt.Geburt=kontakt[5];
  neuerKontakt.Infos=kontakt[12];
  neuerKontakt.Land=kontakt[9];
  neuerKontakt.PLZ=kontakt[7];
  neuerKontakt.Stadt=kontakt[8];
  neuerKontakt.Straße=kontakt[6];
  neuerKontakt.Tel=kontakt[10];
  neuerKontakt.Vorname=kontakt[2];
  neuerKontakt.Web=kontakt[11];
}


async function run(id) {
  try {
   const database = client.db("kontaktserver");   
   const collections = await database.collections();
    const userCollection = database.collection('kontakte');
    const query = { };
    const user = await userCollection.find({}).toArray();

    let filter= {"_id":  new ObjectId(id)};
    const result = await userCollection.replaceOne(filter, neuerKontakt);
    
    if(result.modifiedCount===1){
      return "success";
    }else{
      return "error";
    }
    
  } catch (error0){
    console.log("an error occured: "+error0);
  }
}
module.exports.kontaktWechseln = kontaktWechseln;
module.exports.openClient = openClient;
module.exports.run = run;