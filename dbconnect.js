// STEP-1 : IMPORT MONGOOSE PACKAGE
const mongoose = require('mongoose');
require("dotenv").config();

// Database Connection URL
//Mongoose is an Object Document Mapper (ODM)
// const url = 'mongodb://0.0.0.0/ProjectTest1';
const url = process.env.MONGO_CONNECTION

// STEP-2 : ESTABLISH CONNECTION WITH MONGODB DATABASE THROUGH MONGOOSE
// err is callback function Parameter. ARROW OPERATOR.
// JSON.stringify convert Object to String. 2 means Indentation of Two space Character 
mongoose.connect(url)
      .then( () => 
             {
               console.log('NODEJS TO MongoDB Connection ESTABLISH.....');
             })
      .catch( err => 
              {
               console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
               process.exit();
              }); 
    
// STEP-3 : EXPORT MODULE mongoose because we need it in other JS file
module.exports = mongoose;
