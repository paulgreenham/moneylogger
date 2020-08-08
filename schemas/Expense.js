const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const transactionSchema = new Schema({
    accountId: {type: Schema.Types.ObjectId, ref: 'Account'},
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    category: String,   //determined by user selection from account categories list
    amount: Number,
    date: Date,
    description: String,
    type: String,
    debit: {type: Boolean, default: true}
});

const accountSchema = new Schema({
   ownerId: {type: Schema.Types.ObjectId, ref: 'User'},
   sharedUsers: [{type: Schema.Types.ObjectId, ref: 'User'}],
   categories: [{
       name: String,
       monthlyBudget: Number
   }],
   dateOpened: {type: Date, default: new Date()},
   startMonth: Number
});


const Transaction = mongoose.model('Transaction', transactionSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {Transaction: Transaction, Account};