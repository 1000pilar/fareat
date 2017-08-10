var express = require('express')
var router = express.Router()
var absentCont = require('../controllers/absents-cont')


router.post('/', absentCont.create)
router.get('/', absentCont.getAll)


module.exports = router
