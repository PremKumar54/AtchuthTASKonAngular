const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
  title:{
    type:String
}, 
content:{
  type:String
 }, 
 fullName:{
      type:String
  },
  email:{
      type:String
  }, 
  countryNo:{
    type:String
 },
  mobileNo:{
      type:String
  }, 
}, {
  collection: 'books'
})

module.exports = mongoose.model('Book', Book)