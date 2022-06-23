import * as React from "react"
import "./AddTransaction.css"

export default function AddTransaction(props) {
  const handleOnFormFieldChange = (e) => {
    props.setForm({ [e.target.name] : e.target.value});
  }
  
  console.log(props.form);
  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <AddTransactionForm isCreating = {props.isCreating} form = {props.form} handleOnSubmit = {props.handleOnSubmit} handleOnFormFieldChange={handleOnFormFieldChange}/>
    </div>
  )
}

export function AddTransactionForm(props) {
  // console.log(25, props.form.description)
  // console.log(25, props.form.category)
  // console.log(25, props.form.amount)
  // const description = props.form.description;
  // const category = props.form.description;
  // const amount = props.form.amount;
  console.log(21,props.form);
  return (
    <div className="form">
      <div className="fields">
        <div className="field">
          <label>Description</label>
          <input name="description" placeholder="description" value={props.form?props.form.description:""} onChange={props.handleOnFormFieldChange} />
        </div>
        <div className="field">
          <label>Category</label>
          <input name="category" placeholder="category"value={props.form?props.form.category:""} onChange={props.handleOnFormFieldChange}/>
        </div>
        <div className="field half-flex">
          <label>Amount (cents)</label>
          <input type="number" name="amount" placeholder="amount"value={props.form?props.form.amount:0} onChange={props.handleOnFormFieldChange}/>
        </div>
        <button className="add-transaction" type="submit" onClick={props.handleOnSubmit}>
          Add
        </button>
      </div>
    </div>
  )
}
