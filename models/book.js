var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    name: String
  });

var BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  image: String,
  characters: [CharacterSchema],
  mainCharacter: CharacterSchema,
  releaseDate: String
});

var Book = mongoose.model('Book', BookSchema);

var Character = mongoose.model('Character', CharacterSchema);

module.exports = Book;
