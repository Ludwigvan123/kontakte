
const express = require("express");
const app = express();


const kontaktelesen = require("./kontaktelesen.js");
const kontakteneu = require("./kontakteneu.js");
const kontakteloeschen = require("./kontakteloeschen.js");
const kontaktebearbeiten = require("./kontaktebearbeiten.js");

app.use(express.json());//parsing data from json.
app.post('/index.html', (req, res) => {
    

    if (req.body.sendemir){

        if (req.body.sendemir==="kontakte"){
            kontaktelesen.openClient();
            kontaktelesen.run().then((ergebnis)=>{
                res.json(ergebnis);
            });
        }

        if (req.body.sendemir==="kontakteneu"){
            
            kontakteneu.kontaktWechseln(req.body.kontakt);
            kontakteneu.openClient();
            kontakteneu.run().then((ergebnis)=>{
                kontakteneu.closeClient();
                res.json(ergebnis);                
            });
       }

       if (req.body.sendemir==="kontakteloeschen"){  
        kontakteloeschen.openClient();
        kontakteloeschen.run(req.body.id).then((ergebnis)=>{
            res.json(ergebnis);                
        });
        }


        if (req.body.sendemir==="kontaktebearbeiten"){  
            kontaktebearbeiten.kontaktWechseln(req.body.kontakt);
            kontaktebearbeiten.openClient();
            kontaktebearbeiten.run(req.body.id).then((ergebnis)=>{
                res.json(ergebnis);                
            });
            }

    }
});

app.use(express.static('..//webseite/'));//der folder webseite ist nun statisch erreichbar.
app.listen(443, ()=> console.log("listening on port 443"));

