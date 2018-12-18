const express = require('express')
const bodyParser = require('body-parser');
const port = 8810;
const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist/'));

app.listen(port, ()=>{
    console.log(`App listening on ${port}`);
})



