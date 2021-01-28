# e-commerce-server

# portofolio e-commerce
baseurl : http://localhost:3000/

**Register User**
----
    Register User

* **URL**

    /register

* **Method:**

    `POST`

* **Success Response:**
    {
        "id": 3,
        "email": "adit@mail.com"
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "email must be unique"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


**Login User**
----
    Login User

* **URL**

    /login

* **Method:**

    `POST`

* **Success Response:**
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR5YUBtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE2MDMzMTAxNjR9.Qgdgw-DNluoS1oXOltJ357h3BFdZD8AVo4PfuRJJXVk"
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Wrong Email / Password"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


**Show All Product**
----
    Show All Product

* **URL**

    /products

* **Method:**

    `GET`

* **Success Response:**
    [
        {
            "id": 1,
            "name": "Converse x Comme des Garcons PLAY Chuck 70",
            "imageUrl": "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/5/4/5020864/5020864_141e1b5a-7d1b-4f37-bd76-98bf194bf398_1800_1800.jpg",
            "price": 2300000,
            "stock": 26,
            "createdAt": "2020-10-17T06:34:53.054Z",
            "updatedAt": "2020-10-17T06:40:54.394Z"
        },
    ]

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Cannot Access Without Token"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


    **Create Product**
----
    Create Product

* **URL**

    /products

* **Method:**

    `POST`

* **Success Response:**
    [
        {
            "id": 9,
            "name": "Twisted Resort Chuck 70",
            "imageUrl": "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwab0964bf/images/a_107/169820C_A_107X1.jpg?sw=964",
            "price": 1175124,
            "stock": 17
        }
    ]

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Cannot Access Without Token"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


    **Find Product**
----
    Find Product

* **URL**

    /products/:id

* **Method:**

    `GET`

* **Success Response:**
    {
        "product": {
            "id": 1,
            "name": "Converse x Comme des Garcons PLAY Chuck 70",
            "imageUrl": "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/5/4/5020864/5020864_141e1b5a-7d1b-4f37-bd76-98bf194bf398_1800_1800.jpg",
            "price": 2300000,
            "stock": 26,
            "createdAt": "2020-10-17T06:34:53.054Z",
            "updatedAt": "2020-10-22T02:42:13.868Z"
        }
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Cannot Access Without Token"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


    **Delete Product**
----
    Delete Product

* **URL**

    /products/:id

* **Method:**

    `DELETE`

* **Success Response:**
    {
        "message": "Product Successfully Deleted"
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Cannot Access Without Token"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


    **Edit Product**
----
    Edit Product

* **URL**

    /products/:id

* **Method:**

    `PUT`

* **Success Response:**
    {
        "product": {
            "id": 1,
            "name": "Converse x Comme des Garcons PLAY Chuck 70 NEW",
            "imageUrl": "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/5/4/5020864/5020864_141e1b5a-7d1b-4f37-bd76-98bf194bf398_1800_1800.jpg",
            "price": 2300000,
            "stock": 26,
            "createdAt": "2020-10-17T06:34:53.054Z",
            "updatedAt": "2020-10-22T02:42:13.868Z"
        }
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Cannot Access Without Token"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


    **Show Cart**
----
    Show Cart

* **URL**

    /carts

* **Method:**

    `GET`

* **Success Response:**
    [
        {
            "quantity": 4,
            "status": "not paid",
            "productId": 6,
            "userId": 2,
            "createdAt": "2020-10-21T23:09:19.444Z",
            "updatedAt": "2020-10-22T02:20:20.265Z",
            "id": 5,
            "Product": {
                "id": 6,
                "name": "Converse One Star OX Carnival Pack Bold Mandarin",
                "imageUrl": "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/2/21/1893257/1893257_6ec718e1-015e-4a4d-b124-8b36f1345cec_1652_1652.jpg",
                "price": 799000,
                "stock": 7,
                "createdAt": "2020-10-17T10:55:38.559Z",
                "updatedAt": "2020-10-22T02:31:44.496Z"
            }
        }
    ]

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Cannot Access Without Token"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


    **Add Cart**
----
    Add Cart

* **URL**

    /carts/:id

* **Method:**

    `POST`

* **Success Response:**
    {
        "userId": 2,
        "productId": 1,
        "updatedAt": "2020-10-21T20:37:03.421Z",
        "createdAt": "2020-10-21T20:37:03.421Z",
        "status": "not paid",
        "quantity": 1
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Cannot Access Without Token"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


    **Update Cart**
----
    Update Cart

* **URL**

    /carts/:id

* **Method:**

    `PUT`

* **Success Response:**
    {
        "message": "Cart Successfully Edited"
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Cannot Access Without Token"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


    **Delete Cart**
----
    Delete Cart

* **URL**

    /carts/:id

* **Method:**

    `DELETE`

* **Success Response:**
    {
        "message": "Cart Successfully Deleted"
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Cannot Access Without Token"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />