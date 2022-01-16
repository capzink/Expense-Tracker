import React,{useState} from 'react'

const AddTransaction = () => {
const [text, setText]= useState('')
const [amount, setAmount]=useState(0)

    return (
        <>
        <h3>Add new Transaction</h3>
        <form action="">
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder='Enter text...' />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount<br/>(negative-expense, positie -cincome)</label>
                <input type="number" placeholder='Enter Amount...' />
            </div>
            <button className="btn">Add Transaction</button>
        </form>
            
        </>
    )
}

export default AddTransaction;
