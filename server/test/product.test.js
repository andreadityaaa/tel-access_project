const request = require('supertest')
const app = require('../app')
const { User } = require('../models')
const jwt = require('jsonwebtoken')

let tokenAdmin
let tokenCustomer
let id

let productData = {
    name: 'Canon 5D Mk IV',
    imageUrl: 'https://static.bhphoto.com/images/images1500x1500/canon_eos_5d_mark_iv_1561866720000_1274707.jpg',
    price: 62200000,
    stock: 5
}

beforeAll(done => {
    User.create({
        email: 'admin@mail.com',
        password: '1234',
        role: 'admin'
    })
    .then(user => {
        tokenAdmin = jwt.sign({
            id: user.id,
            email: user.email,
        }, process.env.JWT_SECRET)
        done()
    })
    .catch(err =>{
        done(err)
    })
})

describe('Create Product Test /products', () => {
    describe('Create Product / Success Case', () => {
        test('Should return status 201 and product object', (done) => {
            request(app)
                .post('/products')
                .set('token', tokenAdmin)
                .send(productData)
                .end((err, res) => {
                    if (err) {
                        done(err)
                    } else {
                        expect(res.status).toBe(201)
                        expect(res.body).toHaveProperty('name', productData.name)
                        expect(res.body).toHaveProperty('imageUrl', productData.imageUrl)
                        expect(res.body).toHaveProperty('price', productData.price)
                        expect(res.body).toHaveProperty('stock', productData.stock)
                        id = res.body.id
                        done()
                    }
            })
        })

    }),
    describe('Create Product / Error Case', () => {
        beforeAll(done => {
            User.create({
                email: 'adit@mail.com',
                password: '123123'
            })
            .then(user => {
                tokenCustomer = jwt.sign({
                    id: user.id,
                    email: user.email,
                }, process.env.JWT_SECRET)
                done()
            })
            .catch(err => {
                done(err)
            })
        })

        test('Should return status 400 and message invalid token', (done) => {
            request(app)
            .post('/products')
            .send(productData)
            .end((err, res) => {

                if (err) {
                    done(err)
                } else {
                    expect(res.status).toBe(400);
                    expect(res.body).toHaveProperty('msg', 'Cannot Access Without Token')
                    done()
                }
            })
        })
        test('Should return status 400 and message name is required', (done) => {
            request(app)
            .post('/products')
            .set('token', tokenAdmin)
            .send({
                imageUrl: 'https://static.bhphoto.com/images/images1500x1500/canon_eos_5d_mark_iv_1561866720000_1274707.jpg',
                price: 62200000,
                stock: 5
            })
            .end((err, res) =>{

                if (err) {
                    done(err)
                } else {
                    expect(res.status).toBe(400);
                    expect(res.body).toHaveProperty('msg', 'name is required')
                    done()
                }
            })
        })
        test('Should return status 400 and message image is required', (done) => {
            request(app)
            .post('/products')
            .set('token', tokenAdmin)
            .send({
                name: 'Canon 5D Mk IV',
                price: 62200000,
                stock: 5
            })
            .end((err, res) =>{

                if (err) {
                    done(err)
                } else {
                    expect(res.status).toBe(400);
                    expect(res.body).toHaveProperty('msg', 'imageurl is required')
                    done()
                }
            })
        })
        test('Should return status 400 and message image is required', (done) => {
            request(app)
            .post('/products')
            .set('token', tokenAdmin)
            .send({
                name: 'Canon 5D Mk IV',
                imageUrl: '',
                price: 62200000,
                stock: 5
            })
            .end((err, res) =>{

                if (err) {
                    done(err)
                } else {
                    expect(res.status).toBe(400);
                    expect(res.body).toHaveProperty('msg', 'imageurl is required')
                    done()
                }
            })
        })
        test('Should return status 400 and message price is required', (done) => {
            request(app)
            .post('/products')
            .set('token', tokenAdmin)
            .send({
                name: 'Canon 5D Mk IV',
                imageUrl: 'https://static.bhphoto.com/images/images1500x1500/canon_eos_5d_mark_iv_1561866720000_1274707.jpg',
                stock: 5
            })
            .end((err, res) =>{

                if (err) {
                    done(err)
                } else {
                    expect(res.status).toBe(400);
                    expect(res.body).toHaveProperty('msg', 'price is required')
                    done()
                }
            })
        })
        test('Should return status 400 and message price is required', (done) => {
            request(app)
            .post('/products')
            .set('token', tokenAdmin)
            .send({
                name: 'Canon 5D Mk IV',
                imageUrl: 'https://static.bhphoto.com/images/images1500x1500/canon_eos_5d_mark_iv_1561866720000_1274707.jpg',
                price: '',
                stock: 5
            })
            .end((err, res) =>{

                if (err) {
                    done(err)
                } else {
                    expect(res.status).toBe(400);
                    expect(res.body).toHaveProperty('msg', 'price is required')
                    done()
                }
            })
        })
        test('Should return status 400 and message price is required', (done) => {
            request(app)
            .post('/products')
            .set('token', tokenAdmin)
            .send({
                name: 'Canon 5D Mk IV',
                imageUrl: 'https://static.bhphoto.com/images/images1500x1500/canon_eos_5d_mark_iv_1561866720000_1274707.jpg',
                price: -1,
                stock: 5
            })
            .end((err, res) =>{

                if (err) {
                    done(err)
                } else {
                    expect(res.status).toBe(400);
                    expect(res.body).toHaveProperty('msg', 'price cannot be lower than 0')
                    done()
                }
            })
        })
        test('Should return status 400 and message stock is required', (done) => {
            request(app)
            .post('/products')
            .set('token', tokenAdmin)
            .send({
                name: 'Canon 5D Mk IV',
                imageUrl: 'https://static.bhphoto.com/images/images1500x1500/canon_eos_5d_mark_iv_1561866720000_1274707.jpg',
                price: 62200000
            })
            .end((err, res) =>{

                if (err) {
                    done(err)
                } else {
                    expect(res.status).toBe(400);
                    expect(res.body).toHaveProperty('msg', 'stock is required')
                    done()
                }
            })
        })
        test('Should return status 400 and message stock is required', (done) => {
            request(app)
            .post('/products')
            .set('token', tokenAdmin)
            .send({
                name: 'Canon 5D Mk IV',
                imageUrl: 'https://static.bhphoto.com/images/images1500x1500/canon_eos_5d_mark_iv_1561866720000_1274707.jpg',
                price: 62200000,
                stock: ''
            })
            .end((err, res) =>{

                if (err) {
                    done(err)
                } else {
                    expect(res.status).toBe(400);
                    expect(res.body).toHaveProperty('msg', 'stock is required')
                    done()
                }
            })
        })
        test('Should return status 400 and message stock cannot be lower than 0', (done) => {
            request(app)
            .post('/products')
            .set('token', tokenAdmin)
            .send({
                name: 'Canon 5D Mk IV',
                imageUrl: 'https://static.bhphoto.com/images/images1500x1500/canon_eos_5d_mark_iv_1561866720000_1274707.jpg',
                price: 62200000,
                stock: -1
            })
            .end((err, res) =>{

                if (err) {
                    done(err)
                } else {
                    expect(res.status).toBe(400);
                    expect(res.body).toHaveProperty('msg', 'stock cannot be lower than 0')
                    done()
                }
            })
        })
    })
})