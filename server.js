//depends
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

//mongoose call
mongoose.connect(process.env.MONGO_URI)






// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});