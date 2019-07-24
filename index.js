const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'views')));
// app.use('/content', express.static('gallery'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.use('/', express.static(path.join(__dirname, 'views')));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server started on port ${port}`));