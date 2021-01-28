<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <ProductRow v-for="product in products" :key="product.id" :product="product" />
    </tbody>
  </table>
</template>

<script>
import ProductRow from './ProductRow'
export default {
  name: 'ProductTable',
  props: ['products'],
  components: {
    ProductRow
  }
}
</script>

<style>

</style>
