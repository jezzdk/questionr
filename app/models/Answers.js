const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  questions: {
    type: Schema.Types.ObjectId,
    ref: 'questions'
  },
  question1: {
    type: String
  },
  question2: {
    type: String
  },
  question3: {
    type: String
  },
  question4: {
    type: String
  },
  question5: {
    type: String
  },
  question6: {
    type: String
  },
  question7: {
    type: String
  },
  question8: {
    type: String
  }
});

module.exports = Answers = mongoose.model('answers', AnswerSchema);
