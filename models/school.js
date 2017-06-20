var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    school: { type: String, required: true },
    schoolID: { type: Schema.Types.ObjectId, ref: school, required: false },
    facebook: { type: String, required: false },
    google: { type: String, required: false },
    apple: { type: String, required: false },
    amazon: { type: String, required: false },
    microsoft: { type: String, required: false },
    oracle: { type: String, required: false },
    ibm: { type: String, required: false },
    cisco: { type: String, required: false },
    intel: { type: String, required: false },
    hp: { type: String, required: false },
    boeing: { type: String, required: false },
    jpl: { type: String, required: false },
    northrop: { type: String, required: false },
    qualcomm: { type: String, required: false },
    lockheed: { type: String, required: false },
    raytheon: { type: String, required: false },
    kaiser: { type: String, required: false },
    sce: { type: String, required: false },
    bloomberg: { type: String, required: false },
    goldman: { type: String, required: false },
    att: { type: String, required: false },
    tesla: { type: String, required: false },
    rollsroyce: { type: String, required: false },
    ford: { type: String, required: false },
    gm: { type: String, required: false },
    ebay: { type: String, required: false },
    salesforce: { type: String, required: false },
    linkedin: { type: String, required: false },
    vmware: { type: String, required: false },
    nvidia: { type: String, required: false },
    uber: { type: String, required: false },
    slack: { type: String, required: false },
    reddit: { type: String, required: false },
    geaviation: { type: String, required: false },
    delphi: { type: String, required: false },
    workday: { type: String, required: false },
    expedia: { type: String, required: false }

});

module.exports = mongoose.model('School', schema);