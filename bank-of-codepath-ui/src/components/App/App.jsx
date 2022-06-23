import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import TransactionDetail from "../TransactionDetail/TransactionDetail"
import {useState} from "react"

export default function App() {
  //state variables
  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [transfers,setTransfers] = useState([])
  const [errors,setErrors] = useState()
  const [filterInputValue, setFilterInputValue] = useState("")
  const [newTransactionForm, setNewTransactionForm] = useState({category:"", description:"",amount:0})
  const [isCreating, setIsCreating] = useState(false);
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar filterInputValue={filterInputValue} setFilterInputValue={setFilterInputValue}/>
        <main>
          <Routes>
            <Route path="/" element={<Home newTransactionForm={newTransactionForm} setNewTransactionForm={setNewTransactionForm} isCreating={isCreating} setIsCreating={setIsCreating} transactions={transactions} setTransactions={setTransactions} transfers={transfers} setTransfers={setTransfers} errors={errors} setError={setErrors} isLoading={isLoading} setIsLoading={setIsLoading} filterInputValue={filterInputValue} />}/>
            <Route path="/transactions/:transactionId" component={<TransactionDetail />}/>
          </Routes>
        </main>
      </BrowserRouter>   
    </div>
  )
}
