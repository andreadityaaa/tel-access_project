<template>
  <section id="register-form" style="min-height: 100vh; background-color: #4877BC;">
      <div class="container-fluid">
        <div class="card bg-light">
          <article class="card-body mx-auto" style="width: 50%;">
            <h4 class="card-title mt-3 mb-4 text-center">Register</h4>
              <p id="error_msg" :style="{color: information_color}">{{information}}</p>
              <form @submit.prevent="register" @reset="reset" id="register">
                  <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-envelope"></i></span>
                  </div>
                    <input v-model="email" id="email" name="email_log" class="form-control" placeholder="Email address" type="email">
                  </div>

                  <div class="form-group input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                  </div>
                    <input v-model="password" id="password" class="form-control" name="pass_log" placeholder="Enter password" type="password">
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block"> Register </button>
                  </div><br>
                  <div class="d-flex justify-content-center links mt-3">
                    Have an account? <a href="#" id="signup"><router-link to="/">Sign In</router-link></a>
                  </div>
              </form>
          </article>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      email: '',
      password: '',
      information: 'errorhere',
      information_color: 'transparent'
    }
  },
  methods: {
    register () {
      const { email, password } = this
      const payload = {
        email,
        password
      }
      this.$store.dispatch('register', payload)
        .then(response => {
          this.$router.push({ name: 'LoginPage' })
        })
        .catch(err => {
          console.log(err.response)
          this.information = 'email/password is wrong'
          this.information_color = 'red'
        })
    },
    reset () {
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>
body, html {
  height: 100%;
}
.container-fluid {
  padding: 10% 10% 10%;
  background-image: url('../assets/bg-batman.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
