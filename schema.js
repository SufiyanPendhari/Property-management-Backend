const mongoose = require('mongoose')

const Schema = mongoose.Schema({
      Name: {
          type: String,
          required:true
      },
      Description: {
        type: String,
        required:true
    },
    Size: {
        type: String,
        required:true
    }
})

const PropertySchema = mongoose.model('Property',Schema)

module.exports = PropertySchema