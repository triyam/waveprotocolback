const mongoose = require('mongoose')

const kycSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  phone: {
    type: String,
  },
  dob: {
    type: Date,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  profile: {
    type: String,
  },
  id: {
    type: String,
  },
  idnumber: {
    type: String,
  },
  idExpiryDate: {
    type: Date,
  },
  idFront: {
    type: String,
  },
  idBack: {
    type: String,
  },
  selfie: {
    type: String,
  },
})

const Kyc = mongoose.model('Kyc', kycSchema)

module.exports = Kyc
