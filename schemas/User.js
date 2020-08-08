const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const enums = require('../src/enums');

const UserSchema = new Schema({
    dateCreated: {type: Date, default: new Date()},
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    avatar: String,
    avatarBackground: String,
    language: {type: String, default: enums.languages.ENGLISH}
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;