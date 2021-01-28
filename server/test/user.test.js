const request = require('supertest')
const app = require('../app')

const userData = {
    email: 'admin@mail.com',
    password: '1234'

}

describe('Login Test /login', () => {
  describe('Login / Success Case', () => {
    test('Should return status and token', (done) => {
      request(app)
        .post('/login')
        .send(userData)
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('token')
            done()
          }
        })
    })
  })

  describe('Login / Error Case', () => {
    test('Failed because of invalid email / password', (done) => {
      request(app)
        .post('/login')
        .send({
          email: 'andre@mail.com',
          password: userData.password
        })
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty("msg", "Wrong Email / Password")
            done()
          }
        })
    })


    test('Failed because of invalid email / password', (done) => {
      request(app)
        .post('/login')
        .send({
          email: userData.email,
          password: '4321'
        })
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty("msg", "Wrong Email / Password")
            done()
          }
        })
    })

    test('Failed because of empty email & password', (done) => {
      request(app)
        .post('/login')
        .send({
          email: '',
          password:''
        })
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty("msg", "Wrong Email / Password")
            done()
          }
        })
    })
  })

}) 