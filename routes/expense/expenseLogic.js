const {Transaction, Account} = require('../../schemas/Expense');
const enums = require('../../src/enums');

async function sanity() {
    return {
        statusCode: enums.responseEnum.OK,
        message: "Expense routes working"
    }
}

async function checkUserAccess(accountId, userId) {
    const account = await Account.findById(accountId);
    return account.ownerId === userId || account.sharedUsers.includes(userId)
}

async function getTransactions(accountId, userId, period) {
    const userHasAccess = await checkUserAccess(accountId, userId);
    if(!userHasAccess) {
        return {
            statusCode: enums.responseEnum.NO_PERMISSION,
            data: "User does not have access to that account."
        }
    }
    return await Transaction.find(
        {
            $and: [
                {accountId},
                {date: {$gte: new Date(period.dateFrom)}},
                {date: {$lte: new Date(period.dateTo)}}
            ]
        }
    ).sort({date: -1})
}

module.exports = {
    sanity,
    getTransactions,
};