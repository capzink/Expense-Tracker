const express = require('express')
const {
  getAllTransaction,
  getTransaction,
  createTransaction,
  deleteTransaction,
} = require("../controllers/transactions");
const router = express.Router()


router.route("/").get(getAllTransaction).post(createTransaction)
router.route("/:id").delete(deleteTransaction);


module.exports = router