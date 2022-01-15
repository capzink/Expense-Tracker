const Transaction = require('../models/transaction')


const getAllTransaction = async(req,res, next)=>{
    try {
        const transaction = await Transaction.find({});
        res.status(200).json({ count: transaction.length, data: transaction });  
        
    } catch (error) {
        res.status(500).json({msg:'server error'}) 
    }
    
}

const getTransaction = async (req, res, next) => {
  res.send("delete a transaction");
};

const createTransaction = async (req, res, next) => {
    const {text,amount} = req.body
    try {
         const transaction = await Transaction.create(req.body);
         res.status(201).json({ data: transaction });
        
    } catch (error) {
        if(error.name === 'ValidationError'){
            const message = Object.values(error.errors).map(val=>val.message)
            return res.status(400).json({error:message})
        }
        else {
            return res.status(500).json({error: 'server error'})
        }
    }
   
};

const deleteTransaction = async (req, res, next) => {
  res.send("delete a transaction");
};


module.exports = {
  getAllTransaction,
  getTransaction,
  createTransaction,
  deleteTransaction,
};
