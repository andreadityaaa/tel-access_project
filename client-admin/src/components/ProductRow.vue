<template>
  <tr>
    <th scope="row">{{ product.id }}</th>
    <td>
        <img :src="product.imageUrl" alt="poster" style="width: 100px">
    </td>
    <td>{{ product.name }}</td>
    <td>Rp. {{ thousandFormat(product.price) }}</td>
    <td>{{ product.stock }} pcs</td>
    <td>
      <div>
        <button @click="toEditPage(product.id)" class="btn btn-success btn-sm">Edit</button>
        <div class="divider" />
        <button @click="deleteProduct(product.id)" class="btn btn-success btn-sm">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </button>
      </div>
    </td>
    </tr>
</template>

<script>
export default {
  name: 'ProductRow',
  props: ['product'],
  methods: {
    toEditPage (id) {
      this.$router.push({ name: 'EditPage', params: { id } })
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(({ data }) => {
          this.$router.push('/dashboard')
          this.$store.dispatch('fetchProducts')
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
.divider{
    width:5px;
    height:auto;
    display:inline-block;
}
</style>
