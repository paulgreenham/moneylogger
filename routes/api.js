const express = require('express');
const router = express.Router();
const enums = require('../src/enums');
const user = require('../routes/user/userApis');
const expense = require('./expense/expenseApis');

router.use('/expense', expense);
router.use('/user', user);

router.get('/alive', (ignored, res) => {
    try{
        res.statusCode = enums.responseEnum.OK;
        res.json({message: "Server is up and running"})
    } catch (e) {
        handleFailure(res, e.message)
    }
});

function handleFailure(res, msg) {
    console.log(msg);
    res.statusCode = enums.responseEnum.ERROR;
    res.send(msg);

}

module.exports = router;