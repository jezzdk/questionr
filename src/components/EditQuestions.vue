<template>
  <div>
    <h2>
      <span class="float-right" style="font-size: 12px;">
        <router-link :to="{name:'home'}" class="btn btn-secondary">Back</router-link>
      </span>
      Edit question
    </h2>
    <form @submit.prevent="updateQuestion">
      <div class="card">
        <div class="card-body">
          <div class="form-group row">
            <div class="col-4">Name</div>
            <div class="col-8">
              <input type="text" v-model="question.name" class="form-control">
            </div>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Question</th>
                <th>Answer 1</th>
                <th>Answer 2</th>
                <th>Answer 3</th>
                <th>Answer 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <input type="text" v-model="question.question1.title" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question1.answer1" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question1.answer2" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question1.answer3" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question1.answer4" class="form-control">
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <input type="text" v-model="question.question2.title" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question2.answer1" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question2.answer2" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question2.answer3" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question2.answer4" class="form-control">
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <input type="text" v-model="question.question3.title" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question3.answer1" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question3.answer2" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question3.answer3" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question3.answer4" class="form-control">
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <input type="text" v-model="question.question4.title" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question4.answer1" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question4.answer2" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question4.answer3" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question4.answer4" class="form-control">
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <input type="text" v-model="question.question5.title" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question5.answer1" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question5.answer2" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question5.answer3" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question5.answer4" class="form-control">
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <input type="text" v-model="question.question6.title" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question6.answer1" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question6.answer2" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question6.answer3" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question6.answer4" class="form-control">
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <input type="text" v-model="question.question7.title" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question7.answer1" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question7.answer2" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question7.answer3" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question7.answer4" class="form-control">
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <input type="text" v-model="question.question8.title" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question8.answer1" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question8.answer2" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question8.answer3" class="form-control">
                </td>
                <td>
                  <input type="text" v-model="question.question8.answer4" class="form-control">
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      question: {
        name: "",
        question1: {
          title: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: ""
        },
        question2: {
          title: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: ""
        },
        question3: {
          title: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: ""
        },
        question4: {
          title: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: ""
        },
        question5: {
          title: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: ""
        },
        question6: {
          title: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: ""
        },
        question7: {
          title: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: ""
        },
        question8: {
          title: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: ""
        }
      }
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios.get("/api/questions/" + this.$route.params.id).then(response => {
        this.question = response.data;
      });
    },
    updateQuestion() {
      axios
        .put("/api/questions/" + this.$route.params.id, this.question)
        .then(response => {
          console.log(response);
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>