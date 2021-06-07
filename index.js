const express = require('express');
// require('dotenv').config({ path: "./.env" })
const personasRouter = require('./routes/personas')
const bodyParser = require("body-parser");
const cors = require('cors');

const { db } = require('./db')
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

const app = express();

app.set("port", process.env.PORT || 3000);

const corsOptions = {
    origin: ['http://localhost:8080'],
    optionsSuccessStatus: 200,
    credentials: true, //expose the response to frontend because they have 'credentials: include'
    allowedHeaders: 'X-Requested-With,content-type, Accept',
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/personas', personasRouter);

app.listen(app.get("port"), () => {
    console.log(`servidor activo en puerto ${app.get("port")}`);
});