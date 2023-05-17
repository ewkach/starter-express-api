const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

let alert = null

app.post('/alert', (req, res) => {
    const newAlert = request.body;
    console.log("Got a new alert", newAlert)
    alert = newAlert;
    res.send(`Got new alert ${newAlert}`);
});

app.get('/alert', (req, res) => {
    const lastAlert = alert;
    alert = null;
    res.send(lastAlert)
});


app.listen(process.env.PORT || 3000)
