import * as React from "react"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"
import { useEffect } from "react"
import axios from "axios"

export default function Home(props) {
  useEffect(()=>{
    const fetchTransactions = async() => {
      props.setIsLoading(true);
      await axios.get("http://localhost:3001/bank/transactions")
      .then(res => {
        props.setTransactions(res.data.transactions);
        console.log(1,res.data.transactions);
        props.setIsLoading(false);
      }).catch(err=>{
        props.setError(err);
      })
    await axios.get("http://localhost:3001/bank/transfers")
      .then(res=>{
        props.setTransfers(res.data.transfers);
        console.log(2,res.data.transfers);
        props.setIsLoading(false);
      }).catch(err=>{
        props.setError(err);
      })
    }
    fetchTransactions();
    },[])
    console.log(41, props.filterInputValue);
    console.log(42, props.transactions);

  const filteredTransactions = props.filterInputValue ? props.transactions.filter((currTransaction) => currTransaction.description.toLowerCase().indexOf(props.filterInputValue.toLowerCase()) !== -1) : props.transactions
  console.log(15,filteredTransactions);
  const handleOnSubmitNewTransaction = () =>{
    handleOnCreateTransaction();
  }
 
  const handleOnCreateTransaction = async () => {
    props.setIsCreating(true);

    console.log(226,props.newTransactionForm);

    await axios.post("http://localhost:3001/bank/transactions", {transaction:props.newTransactionForm})
      .then((res) =>{
        console.log(29, res.data.transaction);
        // console.log(255,description);
        // props.setTransactions((current) => [...current, {...res.data.transaction, id: current.length, description: props.newTransactionForm.description.value}]);
      }).catch(error =>{
        console.error(error);
        props.setError(error);
        props.setIsCreating(false);
      })
  }
  
  return (
    <div className="home">
      <AddTransaction handleOnSubmit = {handleOnSubmitNewTransaction} form={props.newTransactionForm} setIsCreating = {props.setIsCreating} isCreating = {props.isCreating} setForm={props.setNewTransactionForm}/>
      {props.isLoading ? <h1>Loading...</h1>:<BankActivity transactions = {filteredTransactions}/>}
      {props.error ? <h2>{props.error}</h2>: ""}
    </div>
  )
}
