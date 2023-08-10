const express = require('express');
const sequelize = require('./utilsfunc/dbfunctions');
const Candidate = require('./models/registrationModel');
const rootDir = require('./utilsfunc/path');
const app = express();
const cors = require('cors');
const router = require('./router/routes');

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors());

// index.js or your server setup file

app.use('/uploads', express.static('uploads'));

app.use(router);

sequelize.authenticate().then(()=>{
    console.log('Db authenticated successfully');
}).catch(err=>{
    console.log('error happened ' + err);
});


sequelize.sync().then(res=>{
    console.log('All tables are created' +res);
})

app.listen(8080 , ()=>{
    console.log('hosted on port 8080');
});