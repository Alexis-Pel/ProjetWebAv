"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesSchema = void 0;
const mongoose = require("mongoose");
exports.MessagesSchema = new mongoose.Schema({
    messages: Array,
    name: String,
    attendees: Array,
});
//# sourceMappingURL=messages.schema.js.map