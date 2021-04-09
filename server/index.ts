const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const optcRoutes = require('./src/routes/optcRoutes');

const app = express();
const port = process.env.PORT || 5000;
const dbUrl = process.env.MONGO_DDBB;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '10mb', extended: true }));

app.use('/', optcRoutes);

app.listen(port, () => {
    console.log(
        `OPTC is running in ${chalk.bgGreen.bold(`port ${port}`)}`,
    );
});
