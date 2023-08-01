const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())



const token = "AstraCS:SiWjBOaUeqiuDCpWNIGimFzu:f6eb96b39f370688fc34237fa1fab466764b065d2eec0972cb5f58b4e0cd9400"
const url = 'https://13705c3a-073a-4fd0-95e8-537c2b26530b-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tickets'

app.post('/tickets' , async (req , res) => {

    const formData = req.body.formData
    const options =  {
        method: 'PORT',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Context-Type': 'application/json'
        },
        data: formData


    }


})


// "clientID": "SiWjBOaUeqiuDCpWNIGimFzu"
// "clientSecret": "m6WEsjRtco7RUMADw_.OzF13X6+FXhdlZ+r3w2vKzKw+Ju8c,eLq4M_dsIAl1ZW-BSDyMjPCY7WvnbAR7Js4g8ZWO1ASnmuWclHja_OznPRDtYhEZ,+rLjz9ex4GWtOj"
app.listen(PORT , () => console.log('server running on port' + PORT))