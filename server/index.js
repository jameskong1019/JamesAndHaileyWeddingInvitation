const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('view'));

const port = process.env.Port || 5000;

app.get('/', function(req, res) {
    res.send('main', '/index.cshtml');
})

app.listen(port, () => console.log(`server started on port ${port}`));