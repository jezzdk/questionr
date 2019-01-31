const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  question1: {
    title: {
      type: String,
      required: true
    },
    answer1: {
      type: String
    },
    answer2: {
      type: String
    },
    answer3: {
      type: String
    },
    answer4: {
      type: String
    }
  },
  question2: {
    title: {
      type: String,
      required: true
    },
    answer1: {
      type: String
    },
    answer2: {
      type: String
    },
    answer3: {
      type: String
    },
    answer4: {
      type: String
    }
  },
  question3: {
    title: {
      type: String,
      required: true
    },
    answer1: {
      type: String
    },
    answer2: {
      type: String
    },
    answer3: {
      type: String
    },
    answer4: {
      type: String
    }
  },
  question4: {
    title: {
      type: String,
      required: true
    },
    answer1: {
      type: String
    },
    answer2: {
      type: String
    },
    answer3: {
      type: String
    },
    answer4: {
      type: String
    }
  },
  question5: {
    title: {
      type: String,
      required: true
    },
    answer1: {
      type: String
    },
    answer2: {
      type: String
    },
    answer3: {
      type: String
    },
    answer4: {
      type: String
    }
  },
  question6: {
    title: {
      type: String,
      required: true
    },
    answer1: {
      type: String
    },
    answer2: {
      type: String
    },
    answer3: {
      type: String
    },
    answer4: {
      type: String
    }
  },
  question7: {
    title: {
      type: String,
      required: true
    },
    answer1: {
      type: String
    },
    answer2: {
      type: String
    },
    answer3: {
      type: String
    },
    answer4: {
      type: String
    }
  },
  question8: {
    title: {
      type: String,
      required: true
    },
    answer1: {
      type: String
    },
    answer2: {
      type: String
    },
    answer3: {
      type: String
    },
    answer4: {
      type: String
    }
  }
});

module.exports = Questions = mongoose.model('questions', QuestionSchema);
