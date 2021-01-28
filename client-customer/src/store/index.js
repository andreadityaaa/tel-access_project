import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setCarts (state, payload) {
      state.carts = payload
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
    register (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
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
    addCart (context, id) {
      return axios({
        method: 'POST',
        url: `http://localhost:3000/carts/${id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          productId: id
        }
      })
    },
    fetchCarts (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/carts',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('setCarts', data)
        })
        .catch(err => {
          console.log(err.respone)
        })
    },
    deleteCart (context, id) {
      return axios({
        method: 'DELETE',
        url: `http://localhost:3000/carts/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    updateQuantity (context, payload) {
      const { quantity, id } = payload
      return axios({
        method: 'PUT',
        url: `http://localhost:3000/carts/${id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          quantity
        }
      })
    }
  }
})
