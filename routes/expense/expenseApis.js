const express = require('express');
const router = express.Router();
const enums = require('../../src/enums');
const expenseLogic = require('./expenseLogic');

router.get('/sanity', async (req, res) => {
    try {
        const response = await expenseLogic.sanity();
        res.statusCode = response.statusCode;
        res.send(response.message)
    } catch (e) {
        handleFailure(res, e.message);
    }
});


router.get('/transactions/:accountId/:userId', async (req, res) => {    //get transactions in an account
    try {
        const {accountId, userId} = req.params;
        const period = req.body;
        if(!accountId) {
            throw new Error("GET /transactions - No accountId.")
        }
        if(!userId) {
            throw new Error("GET /transactions - No accountId.")
        }
        if(!period) {
            throw new Error("GET /transactions - No time period provided.")
        }
        const response = await expenseLogic.getTransactions(accountId, userId, period);
        res.statusCode = response.statusCode;
        res.send(response.data)
    } catch (e) {
        handleFailure(res, e.message);
    }
});

//get all transactions a user has made
//get all transactions a user has made in an account
//get an account
//get all accounts owned by/assigned to a user

//create account
//add/edit a category in an account
//add/remove user from account
//edit account
//delete account

//create transaction
//edit transaction
//delete transaction

function handleFailure(res, msg) {
    console.log(msg);
    res.statusCode = enums.responseEnum.ERROR;
    res.send(msg);
}

module.exports = router;
