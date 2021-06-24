const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

let text = process.argv[2];
if(!text){
    text = "!!!";
}
 
app.get("/", function(request, response){
     response.end(`aqua cube ${text}!`);
});

app.listen(port);

