const mongoose = requrie('mongoose')

const transactionSchema = new mongoose.Schema({
    text:{
        type:String,
        trim: true,
        required:[true, ' please add text']
    },
    amount:{
        type:Number,
        required:[true, ' please add positivie o negative number']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }


})


module.exports = mongoose.model("Transactions", transactionSchema);