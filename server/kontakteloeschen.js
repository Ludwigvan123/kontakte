

const { MongoClient, ObjectId } = require("mongodb");
let uri = "";
let client = "";

function openClient(){
  try{
  uri = "hidden";
   client = new MongoClient(uri);
  } catch (error0){
    console.log("an error occured: "+error0);
  }
}


async function run(myquery) {
  try {
    const database = client.db("kontaktserver");   
    const userCollection = database.collection('kontakte');

    let object={"_id":  new ObjectId(myquery)};
    const result = await userCollection.deleteOne(object);
      
      if (result.deletedCount === 1) {
        return "success";
      } else {
        return "error";
      }

    } catch (error0){
      console.log("an error occured: "+error0);
    }
}

module.exports.openClient = openClient;
module.exports.run = run;