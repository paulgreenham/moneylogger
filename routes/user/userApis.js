const express = require('express');
const router = express.Router();
const enums = require('../../src/enums');
const userLogic = require('./userLogic');

router.get('/sanity', async (req, res) => {
    try {
        const response = await userLogic.sanity();
        res.statusCode = response.statusCode;
        res.send(response.message)
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
