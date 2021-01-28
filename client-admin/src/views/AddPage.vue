<template>
  <div class="d-flex justify-content-center align-items-center container" style="height: 100vh;">
    <section id="addPage" class="row align-items-center">
        <div class="col-6">
            <form @submit.prevent="addProduct">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" autocomplete="off" placeholder="Enter Product Name Here" v-model="name">
            </div>
            <div class="form-group">
                <label for="imageUrl">Image URL</label>
                <input type="text" class="form-control" id="imageUrl" autocomplete="off" placeholder="Enter Product Image Here" v-model="imageUrl">
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="number" class="form-control" id="price" autocomplete="off" placeholder="Enter Product Price Here" v-model="price">
            </div>
            <div class="form-group">
                <label for="stock">Stock</label>
                <input type="number" class="form-control" id="stock" autocomplete="off" placeholder="Enter Product Stock Here" v-model="stock">
            </div>
            <button type="submit" class="btn btn-block btn-info">Add Product</button>
            </form>
        </div>
        <div class="col-6">
          <h2 class="text-center">Add New Product</h2>
          <button type="button" class="btn btn-dark float-right"><router-link to="/dashboard">Back</router-link></button>
          <img src="../assets/add-product.png" alt="image" class="w-100">
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AddPage',
  data () {
    return {
      name: '',
      imageUrl: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const { name, imageUrl, price, stock } = this

      const payload = {
        name,
        imageUrl,
        price,
        stock
      }
      this.$store.dispatch('addProduct', payload)
        .then(({ data }) => {
          this.reset()
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    reset () {
      this.name = ''
      this.imageUrl = ''
      this.price = ''
      this.stock = ''
    }
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
