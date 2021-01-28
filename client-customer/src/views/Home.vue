<template>
  <div>
    <Navbar/>
    <CardBoard :products="products" />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CardBoard from '../components/CardBoard'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    CardBoard,
    Footer
  },
  data () {
    return {
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.token) {
      next()
    } else {
      next({ name: 'LoginPage' })
    }
  }
}
</script>

<style>

</style>
