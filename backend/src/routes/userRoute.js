const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("user route connect successfull")
})

module.exports = router;