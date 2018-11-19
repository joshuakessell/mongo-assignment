const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var KudosSchema = new Schema({
  subject: String,
  message: String,
  giveTo:
    {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
  giveFrom:
    {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
});

const Kudos = mongoose.model("Kudos", KudosSchema);

module.exports = Kudos;