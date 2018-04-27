var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var app = express();

var HolidayAPI = require('node-holidayapi');
var hapi = new HolidayAPI('8e846ca6-78a5-4c5e-ad18-a14d205ff8fa').v1;

app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/api/us-holidays', function (req, res) {
    hapi.holidays({
        country: 'US',
        year: 2015
    }, function (err, data) {
        res.send(data);
    });
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
var port = process.env.PORT || '4200';
const server = http.createServer(app);
server.listen(port, () => console.log(`App Running.... `));
