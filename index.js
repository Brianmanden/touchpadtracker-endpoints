const express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;

const commandsList = {
    notepad: 'notepad.exe',
    firefox: 'firefox.exe'
}

app.get('/api/endpoints', (req, res) => res.send(commandsList));

app.listen(PORT, function () {
    console.log('Server ready');
    console.log('Connect at http://localhost:' + PORT);
});