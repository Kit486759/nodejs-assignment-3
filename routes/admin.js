const express = require('express');
const router = express.Router()
const path = require('path')
const rootDir = require('../util/path')

router.get('/user', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'))
})

router.post('/user', (req, res, next) => {
    console.log(req.body.userName)
    res.redirect('/')
})

module.exports = router