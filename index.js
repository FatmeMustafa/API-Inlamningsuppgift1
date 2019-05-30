const express = require('express');

const routes = require('./routes');
const db = require('./models');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 2000;
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    req.models = db.models
    next()
})

app.use('/', routes);

db.connectDb().then(() => {
    const listener = app.listen(port, () => {
        console.info(`Server is listening on port ${listener.address().port}.`);
    })
});