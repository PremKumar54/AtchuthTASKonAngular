const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
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
  collection: 'notes'
});

module.exports = mongoose.model('Note', NoteSchema);