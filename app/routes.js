const express = require('express');
const router = express.Router();
const Questions = require('./models/Questions');
const Answers = require('./models/Answers');

router.get('/questions', (req, res) => {
  Questions.find()
    .then(questions => {
      if (!questions) {
        return res.status(404).json({ error: 'No questions found' });
      }

      res.json(questions);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
});

router.post('/questions', (req, res) => {
  const data = {
    name: req.body.name,
    question1: {
      title: req.body.question1.title,
      answer1: req.body.question1.answer1,
      answer2: req.body.question1.answer2,
      answer3: req.body.question1.answer3,
      answer4: req.body.question1.answer4
    },
    question2: {
      title: req.body.question2.title,
      answer1: req.body.question2.answer1,
      answer2: req.body.question2.answer2,
      answer3: req.body.question2.answer3,
      answer4: req.body.question2.answer4
    },
    question3: {
      title: req.body.question3.title,
      answer1: req.body.question3.answer1,
      answer2: req.body.question3.answer2,
      answer3: req.body.question3.answer3,
      answer4: req.body.question3.answer4
    },
    question4: {
      title: req.body.question4.title,
      answer1: req.body.question4.answer1,
      answer2: req.body.question4.answer2,
      answer3: req.body.question4.answer3,
      answer4: req.body.question4.answer4
    },
    question5: {
      title: req.body.question5.title,
      answer1: req.body.question5.answer1,
      answer2: req.body.question5.answer2,
      answer3: req.body.question5.answer3,
      answer4: req.body.question5.answer4
    },
    question6: {
      title: req.body.question6.title,
      answer1: req.body.question6.answer1,
      answer2: req.body.question6.answer2,
      answer3: req.body.question6.answer3,
      answer4: req.body.question6.answer4
    },
    question7: {
      title: req.body.question7.title,
      answer1: req.body.question7.answer1,
      answer2: req.body.question7.answer2,
      answer3: req.body.question7.answer3,
      answer4: req.body.question7.answer4
    },
    question8: {
      title: req.body.question8.title,
      answer1: req.body.question8.answer1,
      answer2: req.body.question8.answer2,
      answer3: req.body.question8.answer3,
      answer4: req.body.question8.answer4
    }
  };

  new Questions(data)
    .save()
    .then(questions => res.json(questions))
    .catch(err => {
      return res.status(404).json(err);
    });
});

router.get('/questions/:id', (req, res) => {
  Questions.findById(req.params.id).then(questions => {
    if (!questions) {
      return res.status(404).json({ error: 'Questions not found' });
    }

    res.json(questions);
  });
});

router.put('/questions/:id', (req, res) => {
  const data = {
    name: req.body.name,
    question1: {
      title: req.body.question1.title,
      answer1: req.body.question1.answer1,
      answer2: req.body.question1.answer2,
      answer3: req.body.question1.answer3,
      answer4: req.body.question1.answer4
    },
    question2: {
      title: req.body.question2.title,
      answer1: req.body.question2.answer1,
      answer2: req.body.question2.answer2,
      answer3: req.body.question2.answer3,
      answer4: req.body.question2.answer4
    },
    question3: {
      title: req.body.question3.title,
      answer1: req.body.question3.answer1,
      answer2: req.body.question3.answer2,
      answer3: req.body.question3.answer3,
      answer4: req.body.question3.answer4
    },
    question4: {
      title: req.body.question4.title,
      answer1: req.body.question4.answer1,
      answer2: req.body.question4.answer2,
      answer3: req.body.question4.answer3,
      answer4: req.body.question4.answer4
    },
    question5: {
      title: req.body.question5.title,
      answer1: req.body.question5.answer1,
      answer2: req.body.question5.answer2,
      answer3: req.body.question5.answer3,
      answer4: req.body.question5.answer4
    },
    question6: {
      title: req.body.question6.title,
      answer1: req.body.question6.answer1,
      answer2: req.body.question6.answer2,
      answer3: req.body.question6.answer3,
      answer4: req.body.question6.answer4
    },
    question7: {
      title: req.body.question7.title,
      answer1: req.body.question7.answer1,
      answer2: req.body.question7.answer2,
      answer3: req.body.question7.answer3,
      answer4: req.body.question7.answer4
    },
    question8: {
      title: req.body.question8.title,
      answer1: req.body.question8.answer1,
      answer2: req.body.question8.answer2,
      answer3: req.body.question8.answer3,
      answer4: req.body.question8.answer4
    }
  };

  Questions.findOneAndUpdate({ _id: req.params.id }, { $set: data }, { new: true })
    .then(questions => {
      return res.json(questions);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
});

router.post('/questions/:id/answer', (req, res) => {
  Questions.findById(req.params.id).then(questions => {
    if (!questions) {
      return res.status(404).json({ error: 'Questions not found' });
    }

    const data = {
      questions,
      question1: req.body.question1,
      question2: req.body.question2,
      question3: req.body.question3,
      question4: req.body.question4,
      question5: req.body.question5,
      question6: req.body.question6,
      question7: req.body.question7,
      question8: req.body.question8
    };

    new Answers(data)
      .save()
      .then(answers => res.json(answers))
      .catch(err => {
        return res.status(404).json(err);
      });
  });
});

router.delete('/questions/:id', (req, res) => {
  Answers.find({ questions: req.params.id })
    .remove()
    .then(() => {
      Questions.findByIdAndRemove(req.params.id)
        .then(() => res.json({ success: true }))
        .catch(err => {
          return res.status(404).json(err);
        });
    })
    .catch(err => {
      return res.status(404).json(err);
    });
});

module.exports = router;
