const debug = require('debug')('ordenes:db:setup')
const express = require('express')
const asyncify = require('express-asyncify')
const db = require('./')


const config = require('./config')
const api = asyncify(express.Router())

let service, Store

api.use(express.json())
api.use(express.urlencoded({ extended: false }))
///

api.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Request-Headers, Access-Control-Request-Method, Origin, X-Requested-With, Content-Type, Accept, DNT, Referer, User-Agent, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    }
    else {
        next();
    }
});


api.use('*', async (req, res, next) => {
    console.log("si configura")
    if (!service) {
        try {
            service = await db(config.db)
            res.json({
                success: true
            })
        } catch (e) {
            return next(e)
        }

        Store = service.Store
        Products = service.Product
    }
    next()
})


api.get('/shops', async (req, res, next) => {
    console.log("entra")
    let sh = []
    // console.log("entra")
    try {
        sh = await Store.findAllStores()
    } catch (e) {
        return next(e)
    }

    res.send({ sh })
})

api.get('/shops/:id', async (req, res, next) => {
    const { id } = req.params
    sh = []
    sh = await Store.findStoreByPk(id)
    if (!sh) {
        return next(new Error("id no found"))
    }
    res.send({ sh })
})
/*
api.get('/orderProduct', async (req, res)=>{
    ord=[]
    ord = await OrderProduct.findAllOrdersProduct()
    if(!ord){
        return next(new Error("no products"))
    }
    res.send({ord})
})

api.post('/new/orders', async (req, res, next)=>{
    
    console.log("crea")
    console.log("NOooooooooooooooo", req.body)
    let ord;
    try{
        ord = await Orders.createOrder(req.body) 
    }catch(e){
        return next(e)
    }
    
    res.send({ord})
})
*/
module.exports = api