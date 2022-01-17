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
function deleteTransaction(id){
    dispatch({type: 'DELETE_TRANSACTION',payload:id})
}
function addTransaction(transaction) {
  dispatch({ type: "ADD_TRANSACTION", payload: transaction });
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