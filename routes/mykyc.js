const express = require('express')
const { response } = require('express')
const router = express.Router()
require('../config/db')
const auth = require('../middleware/auth')
const Kyc = require('../models/Kyc')
const upload = require('../middleware/multer')
const fs = require('fs')

router.post('/myKyc', upload.any(), async (req, res) => {
  const {
    firstname,
    lastname,
    phone,
    dob,
    address,
    city,
    state,
    country,
    zipcode,
    id,
    idnumber,
    idExpiryDate,
    selfie,
  } = req.body
  const profile = fs.readFileSync(req.files[0].path, 'base64')
  fs.unlinkSync(req.files[0].path)
  const idFront = fs.readFileSync(req.files[1].path, 'base64')
  fs.unlinkSync(req.files[1].path)
  const idBack = fs.readFileSync(req.files[2].path, 'base64')
  fs.unlinkSync(req.files[2].path)

  try {
    const kyc = await new Kyc({
      firstname,
      lastname,
      phone,
      dob,
      address,
      city,
      state,
      country,
      zipcode,
      id,
      idnumber,
      idExpiryDate,
      profile,
      idFront,
      idBack,
      selfie,
    }).save()
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' })
    console.log(err)
  }

  res.status(200).json({ message: 'Successfully uploaded the kyc' })
})

module.exports = router
