var mongoose =  require('mongoose')
var Schema = mongoose.Schema;

var hottieSchema = new Schema(
  {
    name : String,
    age : Number,
    image : String
  }
);

var hottieModel = mongoose.model("Hottie" , hottieSchema);

module.exports  = hottieModel;
