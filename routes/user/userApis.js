const express = require('express');
const router = express.Router();
const enums = require('../../src/enums');
const userLogic = require('./userLogic');
const Utility = require('../../src/Utility');

router.get('/sanity', async (req, res) => {
    try {
        const response = await userLogic.sanity();
        res.statusCode = response.statusCode;
        res.send(`${response.message}, msgId: ${Utility.makeId(8)}`)
    } catch (e) {
        handleFailure(res, e.message);
    }
});

function handleFailure(res, msg) {
    console.log(msg);
    res.statusCode = enums.responseEnum.ERROR;
    res.send(msg);
}

module.exports = router;
