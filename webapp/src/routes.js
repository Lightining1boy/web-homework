import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
import Transaction from './Transaction'
import TransactionList from './TransactionList'
class MainPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      clickedStore: '',
      transactionHistory: [],
      creditAmount: 0,
      debitAmount: 1000
    }

    this.merchantClicked = this.merchantClicked.bind(this)
    this.sendTransaction = this.sendTransaction.bind(this)
  }

  sendTransaction (transaction) {
    const { creditAmount, debitAmount, transactionHistory } = this.state
    const { credit, debit, amount, description } = transaction
    // const newtransactionHistory = transactionHistory.push()
    if (credit === true) {
      this.setState({ creditAmount: creditAmount - amount })
    } else if (debit === true) {
      this.setState({ debitAmount: debitAmount - amount })
    }
  }

  merchantClicked (store) {
    this.setState({ clickedStore: store })
  }

  render () {
    const { creditAmount, debitAmount, transactionHistory } = this.state
    return (
      <Router>
        <TransactionList merchantClicked={this.merchantClicked} />
        Debit Card Amount - {debitAmount}
        <br />
        Credit Card Amount - {creditAmount}
        <br />

        <Route exact path='/' />
        <Route exact path='/transaction' render={(props) => <Transaction sendTransaction={this.sendTransaction} />} />
      </Router>
    )
  }
}
export default MainPage

const layoutStyle = css`
    display: grid;
    grid-row-gap: 24px;
    padding: 8px;
`

const navStyle = css`
  grid-row: 1;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
  }
  
  & > ul > li:not(:first-child) {
    margin-left: 16px;
  }
`

const contentStyle = css`
  grid-row: 2;
`
