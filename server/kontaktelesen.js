let tabellenTitel = ["_id","Name","Vorname","Firma","Email", "Geburt","Straße", "PLZ","Stadt", "Land","Tel","Web","Infos"];
let kontakte =[];
const { MongoClient } = require("mongodb");
let uri = "";
let client = "";

function openClient(){
  try{
   uri = "hidden";
 client = new MongoClient(uri);
  } catch (error0) {
    console.log("an error occured: "+error0);
  }
}

async function run() {
  try {
   const database = client.db("kontaktserver");   
    const userCollection = database.collection('kontakte');

    const user = await userCollection.find({}).toArray();
    kontakte =[];
    
    for (let j=0;j<user.length;j++){
      let kontakt=[];
      for (let i=0;i<=12;i++){
        let currentposition = tabellenTitel[i];      
        if (i===0){
          let kontakteValue = user[j][currentposition];
          kontakteValue= kontakteValue.toString().replace(/ObjectId\("(.*)"\)/, "$1");          
          kontakt.push(kontakteValue);
        }  else{
          kontakt.push(user[j][currentposition]);
        }
      }
      kontakte.push(kontakt);
     
    }
    
    if (user) {
        return kontakte;
    }else{
      return "error";
    }  
  

  } catch (error0){
    console.log("an error occured: "+error0);
  }
}

module.exports.openClient = openClient;
module.exports.run = run;