<template>
  <div class="row">
    <div class="col-md-4 offset-md-4">
      <form @submit.prevent="login">
        <div class="form-group row">
          <div class="col-4">Email</div>
          <div class="col-8">
            <input type="email" v-model="email" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-4">Password</div>
          <div class="col-8">
            <input type="password" v-model="password" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Log in</button>
          <router-link to="/">Back</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "guest@example.com",
      password: "passw0rd"
    };
  },
  methods: {
    login() {
      if (this.email === "guest@example.com" && this.password === "passw0rd") {
        localStorage.setItem("auth", true);
        this.$router.push(this.$route.query.redirect || "/");
      }
    }
  }
};
</script>