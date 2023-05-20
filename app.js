const express = require("express")
const app = express()
const morgan = require("morgan")
const port = process.env.PORT || 3001

app.use(morgan('dev'))

app.get("/", (req, res) => {
    console.log(req.header('authorization'))
    res.json({
        "sub": "test",
        "nickname": "TestPlayer"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
