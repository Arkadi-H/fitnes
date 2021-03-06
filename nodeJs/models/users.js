const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: String,
    name: String,
    lastName: String,
    password: String,
}, {versionKey: false, timestamps: true});
UserSchema.set('collection', 'users');

module.exports = mongoose.model('User', UserSchema);
