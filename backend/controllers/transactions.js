
const getAllTransaction = (req,res, next)=>{
    res.send('get all transactions')
}

const getTransaction = (req, res, next) => {
  res.send("delete a transaction");
};

const createTransaction = (req, res, next) => {
  res.send("create a trasaction");
};

const deleteTransaction = (req, res, next) => {
  res.send("delete a transaction");
};


module.exports = {
  getAllTransaction,
  getTransaction,
  createTransaction,
  deleteTransaction,
};
