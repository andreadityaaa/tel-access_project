<template>
  <tr>
    <td>
    <div class="media">
        <a class="thumbnail pull-left" href="#"> <img class="media-object" :src="cart.Product.imageUrl" style="width: 72px; height: 72px;"> </a>
        <div class="media-body">
            <h4 class="media-heading"><a href="#">{{ cart.Product.name }}</a></h4>
            <h5 class="media-heading"><a href="#">Rp. {{ thousandFormat(cart.Product.price) }}</a></h5>
            <span>Status: </span><span class="text-success"><strong>{{ cart.status }}</strong></span>
        </div>
    </div></td>
    <td>
      {{ cart.quantity }}
    </td>
    <td>
      <form @submit.prevent="updateQuantity(cart.id)">
        <input v-model="quantity" type="number">
        <input type="submit" value="Update"><br>
        <p id="error_msg" :style="{color: information_color}">{{information}}</p>
      </form>
    </td>
    <td>
      Rp. {{ thousandFormat(total()) }}
    </td>
    <b-button @click="deleteCart(cart.id)" variant="danger">Remove</b-button>
    </tr>
</template>

<script>
export default {
  name: 'CartRow',
  data () {
    return {
      quantity: '',
      information: 'errorhere',
      information_color: 'transparent'
    }
  },
  props: ['cart'],
  methods: {
    thousandFormat (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    total () {
      return this.cart.quantity * this.cart.Product.price
    },
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
        .then(data => {
          this.$store.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    updateQuantity (id) {
      const quantity = this.quantity
      const payload = {
        quantity,
        id
      }
      if (quantity > this.cart.Product.stock) {
        this.information = 'Maximum stock reached'
        this.information_color = 'red'
      } else if (quantity < 1) {
        this.information = 'Quantity Cannot Input Negatif Number or 0'
        this.information_color = 'red'
      } else {
        this.$store.dispatch('updateQuantity', payload)
          .then(data => {
            this.$store.dispatch('fetchCarts')
            this.information = ''
          })
          .catch(err => {
            console.log(err.response)
          })
      }
    }
  }
}
</script>

<style>

</style>
