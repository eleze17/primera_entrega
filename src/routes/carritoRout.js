const express = require('express')
const { Router } = require('express');
const routCarrito = Router()
const carrito = require('../controllers/carrito')




    routCarrito.post('/', (req,res) => {
        let carriPost = new carrito()
        res.json(carriPost)
    })

routCarrito.delete('/push', (req,res) => {
    carrito.push(req.body)
    res.json(req.body)
})

routCarrito.get('/get', (req,res) => {
    res.json(carrito)
})

routCarrito.post('/get', (req,res) => {
    res.json(carrito)
})

routCarrito.delete('/get', (req,res) => {
    res.json(carrito)
})

Module.export = routCarrito.js