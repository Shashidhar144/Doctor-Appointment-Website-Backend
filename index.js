const express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
const PORT = process.env.PORT || 4500

var cors = require('cors')
app.use(cors())

const my_mongoose = require('./dbconnect.js');
   
const registrationAPI = require('./controllers/registartionAPI');
const DocRegistrationAPI=require('./controllers/DoctorRegistrationApi');
const PatRegistrationAPI=require('./controllers/PatientAppointmentApi')
app.use('/reg',registrationAPI);

app.use('/Doc', DocRegistrationAPI);

app.use('/Pat',PatRegistrationAPI)
app.listen(PORT, () => console.log(`EXPRESS Server Started at Port No: ${PORT}`));
