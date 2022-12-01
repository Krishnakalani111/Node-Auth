import mongoose from 'mongoose';

const UserScehma = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    { collection: 'ProUsers' }
);

const model = mongoose.model('UserSchema', UserScehma);

module.exports = model;