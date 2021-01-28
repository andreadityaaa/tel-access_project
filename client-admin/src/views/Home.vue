<template>
  <div>
    <Navbar/>
    <ProductTable :products="products" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import ProductTable from '../components/ProductTable'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductTable
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
