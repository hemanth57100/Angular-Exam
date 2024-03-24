const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

let objectsArray = [];

app.use(bodyParser.json());
app.use(cors()); 

app.put('/api/objects', (req, res) => {
    const newObject = req.body;
    objectsArray.push(newObject);
    res.status(201).json(newObject);
});
app.get('/api/data',(req,res)=>{
    res.json(objectsArray);
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});