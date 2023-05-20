const express = require("express")
const app = express()
const morgan = require("morgan")
const port = process.env.PORT || 3001

app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.type('html').send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
