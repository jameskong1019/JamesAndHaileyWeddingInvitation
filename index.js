const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');

app.use(express.static(path.join(__dirname, 'views')));
app.use(favicon(path.join(__dirname, 'views/content/images/icon', 'favicon.ico')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.use('/', express.static(path.join(__dirname, 'views')));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server started on port ${port}`));