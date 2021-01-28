<template>
  <b-card-group deck>
    <b-card class="text-center mt-3">
    <div class="card" style="width: 12rem;">
      <img class="card-img-top" :src="product.imageUrl" :alt="`card img ${product.name}`">
      <div class="card-body">
        <p id="title" class="card-title">{{product.name}}</p>
        <p id="stock" class="card-text">Stock: {{product.stock}} pcs</p>
        <p id="price" class="card-text">Rp. {{ thousandFormat(product.price) }} </p>
        <button @click="addCart(product.id)" class="btn btn-success btn-sm">Add to Cart</button>
      </div>
    </div>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: 'CardList',
  props: ['product'],
  methods: {
    addCart (id) {
      this.$store.dispatch('addCart', id)
        .then(cart => {
          this.$router.push({ name: 'CartTable' })
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    thousandFormat (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>

<style>
button {
    float: right;
    margin: 3px;
  }
  #title {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: -2px;
  }
  #product-desc {
    font-size: 11px;
  }
  #stock {
    font-size: 11px
  }
  #price {
    font-weight: bold;
  }
</style>
