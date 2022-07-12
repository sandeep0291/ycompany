const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patient = new Schema({
  name: String,
  age: {type: Number, min: 1, max: 99},
  sex: String,
  serialNumber: {type: String, required: true},
  address: String,
  status: {type: String, default: "entry"},
  mobile: String,
  date: {type: Date, default: Date.now},
  report: String,
  refDoctorId: String,
  cashProvided: Number,
  lessByDoctor: Number,
  fieldArea: String,
  investigatonIds: [String],
});

module.exports = mongoose.model("patient", patient);
