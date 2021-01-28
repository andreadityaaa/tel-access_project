<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #B8FF94;">
    <a class="navbar-brand" href="#">E-Commerce</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link"><router-link to="/dashboard">Home</router-link><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/about"><router-link to="/about">About</router-link></router-link></a>
        </li>
      </ul>
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <button class="btn btn-primary" type="button" @click.prevent="changePage">Add Product</button>
        <div class="divider"/>
        <button class="btn btn-danger my-2 my-sm-0" type="button" @click.prevent="logout">Sign out</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },
    changePage () {
      this.$router.push({ name: 'AddPage' })
    }
  }
}
</script>

<style>
.divider{
    width:5px;
    height:auto;
    display:inline-block;
}
</style>
