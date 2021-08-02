const express = require('express');
const app = express()

const bodyParser = require('body-parser')
const path = require('path')

// import root direction utility
const rootDir = require('./util/path')

// import routes
const adminRoutes = require('./routes/admin')
const indexRoutes = require('./routes/index')

// call body parser
app.use(bodyParser.urlencoded({ extended: false }))

// call static file etc style
app.use(express.static(path.join(rootDir, 'public')))

app.use('/add-user',adminRoutes)
app.use(indexRoutes)

app.use((req, res) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(3000)