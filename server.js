const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const api = require('./routes/fileApis');
const jwt = require('jsonwebtoken');
const {ObjectId} = require('mongodb');
const jwtKey = require('./src/config').jwtKey;

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/appTemplate', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});     //to avoid deprecation warnings

const app = express();
app.set('jwtKey', jwtKey);
app.use(cors());
app.use(bodyParser.json({limit: "100mb"}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(validateToken);
app.use('/', api);

const port = process.env.PORT || 80;
const server = app.listen(port, function () {
    console.log(`File server running on port ${port}`)
});


/*<----------Functions----------->*/

function getToken(req) {
    return req.body.token ||
        req.params.token ||
        req.headers['x-access-token'] ||
        req.headers['token'] ||
        (req.cookies && req.cookies.token);
}

function validateToken(req, res, next) {
    // check header or url parameters or post parameters for token
    const token = getToken(req);
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('jwtKey'), function (err, decoded) {
            if (err) {
                decoded._id = ObjectId();
                next();
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        req.decoded = {_id: ObjectId()};
        next();
    }
}