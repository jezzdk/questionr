<template>
  <div>
    <h2>
      <span class="float-right" style="font-size: 12px;">
        <router-link :to="{name:'questions.create'}" class="btn btn-primary">Create new</router-link>
      </span>
      Questions
    </h2>
    <div class="card">
      <div class="card-body">
        <table class="table" v-if="data.length">
          <tr v-for="(item, index) in data" :key="index">
            <td>
              <router-link :to="{name: 'questions.show', params: { id: item._id }}">{{ item.name }}</router-link>
            </td>
            <td class="text-right">
              <router-link :to="{name: 'questions.edit', params: { id: item._id }}">Edit</router-link>
              <a href="#delete" @click.prevent="deleteItem(item)">Delete</a>
            </td>
          </tr>
        </table>
        <div v-else class>No questions</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
      auth: false
    };
  },
  mounted() {
    this.fetch();
    this.auth = !!localStorage.getItem("admin");
  },
  methods: {
    fetch() {
      axios.get("/api/questions").then(response => {
        this.data = response.data;
      });
    },
    deleteItem(item) {
      axios.delete("/api/questions/" + item._id).then(response => {
        this.fetch();
      });
    }
  }
};
</script>