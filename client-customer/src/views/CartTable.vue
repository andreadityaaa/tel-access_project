<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Product</th>
        <th scope="col">Quantity</th>
        <th scope="col">Update Quantity</th>
        <th scope="col">Total</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <CartRow v-for="cart in carts" :key="cart.id" :cart="cart" />
      <td></td>
      <td></td>
      <td></td>
      <td>
      <button @click.prevent="changePage" type="button" class="btn btn-outline-primary">
        Continue Shopping <span class="glyphicon glyphicon-play"></span>
      </button></td>
      <td>
      <button type="button" class="btn btn-outline-primary">
        Checkout <span class="glyphicon glyphicon-play"></span>
      </button></td>
    </tbody>
  </table>
</template>

<script>
import CartRow from '../components/CartRow'
export default {
  name: 'CartTable',
  components: {
    CartRow
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  methods: {
    changePage () {
      this.$router.push({ name: 'Home' })
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
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
