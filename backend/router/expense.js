const express = require('express')
const {getAllExpenses} = require('../controllers/expense')
const router = express.Router()


router.route("/").get(getAllExpenses);


module.exports = router