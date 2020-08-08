const UserModel = require('../../schemas/User');
const enums = require('../../src/enums');
const bcrypt = require('bcryptjs');
const salt = 13;
const jwt = require('jsonwebtoken');

const avatarColorsArray = [
    "#f44336",
    "#e81e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f2",
    "#03a9f3",
    "#00bcd3",
    "#009688",
    "#4caf50",
    "#8bc24a",
    "#ccdb39",
    "#fec007",
    "#fe9800",
    "#fe5722",
];

function getAvatarColor() {
    const rand = Math.floor((Math.random() * 100) % avatarColorsArray.length);
    return avatarColorsArray[rand];
}

function createToken(email, id, secret, duration, type = 1) {
    return jwt.sign({email: email, _id: id, type}, secret, {
        expiresIn: duration
    });
}

async function encryptPass(password) {
    try {
        return await bcrypt.hash(password, salt);
    } catch (e) {
        console.error(e)
    }
}

async function verifyPass(password, hash) {
    try {
        return await bcrypt.compare(password, hash);
    } catch (e) {
        console.error(e)
    }
}

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";
    const n = charset.length;
    for (let i = 0; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

async function sanity() {
    return {
        statusCode: enums.responseEnum.OK,
        message: "User routes working"
    }
}

module.exports = {
    sanity,
};