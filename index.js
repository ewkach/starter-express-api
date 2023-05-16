const express = require('express')
const app = express()

let newAlerts = []

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.post('/alert', (req, res) => {
    const newAlert = request.body;
    console.log("Got a new alert", newAlert)
    alerts.push(newAlert);
    res.send("Got new alert, thanks!");
});

app.get('/new', (req, res) => {
    const recentAlerts = newAlerts;
    newAlerts = [];
    res.send(recentAlerts)
});


app.listen(process.env.PORT || 3000)