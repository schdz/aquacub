const express = require("express");
const app = express();

let text = process.argv[2];
if(!text){
    text = "!!!";
}
 
app.get("/", function(request, response){
     response.end(`aqua cube ${text}!`);
});


