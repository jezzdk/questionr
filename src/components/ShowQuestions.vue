<template>
  <div>
    <div v-if="answered">You have answered this question. Thank you!</div>
    <div v-else-if="data" class="card">
      <form @submit.prevent="answerQuestions">
        <div class="card-body">
          <h3>{{ data.name }}</h3>
          <div class="mb-4">
            Question 1: {{ data.question1.title }}
            <label class="d-block">
              <input v-model="question1" value="1" type="radio" name="question1">
              {{ data.question1.answer1 }}
            </label>
            <label class="d-block">
              <input v-model="question1" value="2" type="radio" name="question1">
              {{ data.question1.answer2 }}
            </label>
            <label class="d-block">
              <input v-model="question1" value="3" type="radio" name="question1">
              {{ data.question1.answer3 }}
            </label>
            <label class="d-block">
              <input v-model="question1" value="4" type="radio" name="question1">
              {{ data.question1.answer4 }}
            </label>
          </div>
          <div class="mb-4">
            Question 2: {{ data.question2.title }}
            <label class="d-block">
              <input v-model="question2" value="1" type="radio" name="question2">
              {{ data.question2.answer1 }}
            </label>
            <label class="d-block">
              <input v-model="question2" value="2" type="radio" name="question2">
              {{ data.question2.answer2 }}
            </label>
            <label class="d-block">
              <input v-model="question2" value="3" type="radio" name="question2">
              {{ data.question2.answer3 }}
            </label>
            <label class="d-block">
              <input v-model="question2" value="4" type="radio" name="question2">
              {{ data.question2.answer4 }}
            </label>
          </div>
          <div class="mb-4">
            Question 3: {{ data.question3.title }}
            <label class="d-block">
              <input v-model="question3" value="1" type="radio" name="question3">
              {{ data.question3.answer1 }}
            </label>
            <label class="d-block">
              <input v-model="question3" value="2" type="radio" name="question3">
              {{ data.question3.answer2 }}
            </label>
            <label class="d-block">
              <input v-model="question3" value="3" type="radio" name="question3">
              {{ data.question3.answer3 }}
            </label>
            <label class="d-block">
              <input v-model="question3" value="4" type="radio" name="question3">
              {{ data.question3.answer4 }}
            </label>
          </div>
          <div class="mb-4">
            Question 4: {{ data.question4.title }}
            <label class="d-block">
              <input v-model="question4" value="1" type="radio" name="question4">
              {{ data.question4.answer1 }}
            </label>
            <label class="d-block">
              <input v-model="question4" value="2" type="radio" name="question4">
              {{ data.question4.answer2 }}
            </label>
            <label class="d-block">
              <input v-model="question4" value="3" type="radio" name="question4">
              {{ data.question4.answer3 }}
            </label>
            <label class="d-block">
              <input v-model="question4" value="4" type="radio" name="question4">
              {{ data.question4.answer4 }}
            </label>
          </div>
          <div class="mb-4">
            Question 5: {{ data.question5.title }}
            <label class="d-block">
              <input v-model="question5" value="1" type="radio" name="question5">
              {{ data.question5.answer1 }}
            </label>
            <label class="d-block">
              <input v-model="question5" value="2" type="radio" name="question5">
              {{ data.question5.answer2 }}
            </label>
            <label class="d-block">
              <input v-model="question5" value="3" type="radio" name="question5">
              {{ data.question5.answer3 }}
            </label>
            <label class="d-block">
              <input v-model="question5" value="4" type="radio" name="question5">
              {{ data.question5.answer4 }}
            </label>
          </div>
          <div class="mb-4">
            Question 6: {{ data.question6.title }}
            <label class="d-block">
              <input v-model="question6" value="1" type="radio" name="question6">
              {{ data.question6.answer1 }}
            </label>
            <label class="d-block">
              <input v-model="question6" value="2" type="radio" name="question6">
              {{ data.question6.answer2 }}
            </label>
            <label class="d-block">
              <input v-model="question6" value="3" type="radio" name="question6">
              {{ data.question6.answer3 }}
            </label>
            <label class="d-block">
              <input v-model="question6" value="4" type="radio" name="question6">
              {{ data.question6.answer4 }}
            </label>
          </div>
          <div class="mb-4">
            Question 7: {{ data.question7.title }}
            <label class="d-block">
              <input v-model="question7" value="1" type="radio" name="question7">
              {{ data.question7.answer1 }}
            </label>
            <label class="d-block">
              <input v-model="question7" value="2" type="radio" name="question7">
              {{ data.question7.answer2 }}
            </label>
            <label class="d-block">
              <input v-model="question7" value="3" type="radio" name="question7">
              {{ data.question7.answer3 }}
            </label>
            <label class="d-block">
              <input v-model="question7" value="4" type="radio" name="question7">
              {{ data.question7.answer4 }}
            </label>
          </div>
          <div class="mb-4">
            Question 8: {{ data.question8.title }}
            <label class="d-block">
              <input v-model="question8" value="1" type="radio" name="question8">
              {{ data.question8.answer1 }}
            </label>
            <label class="d-block">
              <input v-model="question8" value="2" type="radio" name="question8">
              {{ data.question8.answer2 }}
            </label>
            <label class="d-block">
              <input v-model="question8" value="3" type="radio" name="question8">
              {{ data.question8.answer3 }}
            </label>
            <label class="d-block">
              <input v-model="question8" value="4" type="radio" name="question8">
              {{ data.question8.answer4 }}
            </label>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: null,
      question1: null,
      question2: null,
      question3: null,
      question4: null,
      question5: null,
      question6: null,
      question7: null,
      question8: null,
      answered: false
    };
  },
  mounted() {
    if (localStorage.getItem("question" + this.$route.params.id)) {
      this.answered = true;
    } else {
      this.fetch();
    }
  },
  methods: {
    fetch() {
      axios.get("/api/questions/" + this.$route.params.id).then(response => {
        this.data = response.data;
      });
    },
    answerQuestions() {
      axios
        .post("/api/questions/" + this.$route.params.id + "/answer", {
          question1: this.question1,
          question2: this.question2,
          question3: this.question3,
          question4: this.question4,
          question5: this.question5,
          question6: this.question6,
          question7: this.question7,
          question8: this.question8
        })
        .then(response => {
          this.answered = true;
          localStorage.setItem("question" + this.$route.params.id, true);
        });
    }
  }
};
</script>