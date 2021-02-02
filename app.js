const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const port = 3000;

mongoose.connect('mongodb://localhost:27017:usersDatabase', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Db connected successfully.')
    })
    .catch((err) => {
        console.log(`Db connected failed, reason : ${err}`)
    })

app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRoutes);

app.listen(port, () => console.log(`Server started at ${port}`));
