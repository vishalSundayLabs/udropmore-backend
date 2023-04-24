"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const weightGainChartSchema = new mongoose.Schema({});
exports.default = mongoose.model("weightgainchart", weightGainChartSchema);
