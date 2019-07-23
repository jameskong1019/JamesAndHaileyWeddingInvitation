const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();

// app.use(bodyParser.json());
// app.use(cors());
const port = process.env.Port || 3000;

app.get('/', function(req, res) {
    res.send('test');
})

app.listen(port, () => console.log(`server started on port ${port}`));