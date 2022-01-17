import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

//initial state
const InitialState = {
  transactions: [],
  error: null,
  loading:true
};

//createContext

export const GlobalContext = createContext(InitialState);

//provider
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, InitialState);
//actions

async function getTransactions(){
  try {
    const res = await axios.get('/transactions')

    dispatch({
      type:'GET_TRANSACTIONS', payload:res.data.data
    })
    
  } catch (error) {
    dispatch({
      type: "TRANSACTION_ERROR",
      payload: error.response.data.error,
    });
    
  }
}
async function deleteTransaction(id){
  try {
    await axios.delete((`/transactions/${id}`))
    dispatch({type: 'DELETE_TRANSACTION',payload:id})
  } catch (error) {
    dispatch({
      type: "TRANSACTION_ERROR",
      payload: error.response.data.error,
    });
    
  }
}

async function addTransaction(transaction) {
  const config = {
    header:{
      'Content-type':'application/json'
    }
  }
  try {
    const res= await axios.post('/transactions',transaction,config)
    dispatch({ type: "ADD_TRANSACTION", payload: res.data.data });
  } catch (error) {
    dispatch({
      type: "TRANSACTION_ERROR",
      payload: error.response.data.error,
    });
    
    
  }
}

    return (
      <GlobalContext.Provider
        value={{
          transactions: state.transactions,
          error: state.error,
          loading:state.loading,
          deleteTransaction,
          addTransaction,
          getTransactions,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
}