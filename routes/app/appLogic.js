const AppModel = require('../../schemas/User');
const enums = require('../../src/enums');

async function sanity() {
    return {
        statusCode: enums.responseEnum.OK,
        message: "App routes working"
    }
}

module.exports = {
    sanity,
};