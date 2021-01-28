<template>
  <div class="container">
    <div class="row my-5">
      <CardList v-for="product in products" :key="product.id" :product="product" id="card-list" />
    </div>
  </div>
</template>

<script>
import CardList from './CardList'

export default {
  name: 'CardBoard',
  props: ['products'],
  components: {
    CardList
  }
}
</script>

<style>
#card-list {
    margin-top: 30px !important;
  }
</style>
