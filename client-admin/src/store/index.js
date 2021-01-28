import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    selectedProduct: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setSelectedProduct (state, payload) {
      state.selectedProduct = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email,
          password
        }
      })
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err.respone)
        })
    },
    addProduct (context, payload) {
      const { name, imageUrl, price, stock } = payload
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name,
          imageUrl,
          price,
          stock
        }
      })
    },
    fetchProductById (context, id) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('setSelectedProduct', data.product)
        })
        .catch(err => {
          if (err.response.status === 404) {
            this.$router.push({ name: 'NotFound' })
          }
        })
    },
    editProduct (context, payload) {
      const { name, imageUrl, price, stock, id } = payload
      return axios({
        method: 'PUT',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name,
          imageUrl,
          price,
          stock
        }
      })
    },
    deleteProduct (context, id) {
      return axios({
        method: 'DELETE',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },
  modules: {
  }
})
