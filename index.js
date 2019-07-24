const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('views'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server started on port ${port}`));