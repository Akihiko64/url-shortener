const express = require('express');
const connectDB = require('./db/db');
require('dotenv/config');

//routes
const routes = require('./src/api/routes');

//instatiate the express app
const app = express();
//instatiate db
connectDB();


//app config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app config routes
app.use('/', routes.redirect);
app.use('/api', routes.urls);

//port for server
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Server start, listen PORT ${PORT}`));
