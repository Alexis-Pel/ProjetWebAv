"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
const mongoose = require("mongoose");
exports.UsersSchema = new mongoose.Schema({
    pseudo: String,
    email: String,
    hashPassword: String,
    description: String,
    created_at: { type: Date, default: Date.now }
});
//# sourceMappingURL=users.schemas.js.map