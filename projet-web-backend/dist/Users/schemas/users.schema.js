"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
const mongoose = require("mongoose");
exports.UsersSchema = new mongoose.Schema({
    pseudo: String,
    email: String,
    description: String,
    img: String,
    hashPassword: String,
    friends: Array,
    created_at: { type: Date, default: Date.now },
    pendingFriends: Array,
    groups: Array,
});
//# sourceMappingURL=users.schema.js.map