import React, {useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
const {transactions} = useContext(GlobalContext)

  return (
    <>
      <h4>Balance</h4>
      <h1>0.00</h1>
    </>
  ); 
};

export default Balance;
