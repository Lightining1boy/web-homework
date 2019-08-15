import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
import Transaction from './Transaction'
import fakeData from './fakeData'
import TransactionHistory from './TransactionHistory'

class MainPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      transactionHistory: fakeData
    }
    this.cancelTransaction = this.cancelTransaction.bind(this)
    this.sendTransaction = this.sendTransaction.bind(this)
    this.saveEditedTransaction = this.saveEditedTransaction.bind(this)
  }

  cancelTransaction (transaction) {
    const { transactionHistory } = this.state
    const newHistory = Object.assign({}, transactionHistory)
    newHistory.history = newHistory.history.filter((currentTransaction) => {
      return currentTransaction.id !== transaction.id
    })
    this.setState({ transactionHistory: newHistory })
  }

  sendTransaction (transaction) {
    const { transactionHistory } = this.state
    const newHistory = Object.assign({}, transactionHistory)
    newHistory.history.unshift(transaction)
    this.setState({ transactionHistory: newHistory })
  }

  saveEditedTransaction (transaction) {
    const { transactionHistory } = this.state
    let filteredHistory = Object.assign({}, transactionHistory)
    filteredHistory.history = filteredHistory.history.filter((currentTransaction) => {
      return currentTransaction.id !== transaction.id
    })
    filteredHistory.history.unshift(transaction)
    this.setState({ transactionHistory: filteredHistory })
  }

  render () {
    const { transactionHistory } = this.state
    return (
      <Router>
        <Link css={tranLink} to='/transaction'> Make Transaction </Link>
        <TransactionHistory cancelTransaction={this.cancelTransaction} saveEditedTransaction={this.saveEditedTransaction} transactionHistory={transactionHistory} />
        <Route exact path='/' />
        <Route exact path='/transaction' render={(props) => <Transaction sendTransaction={this.sendTransaction} />} />
      </Router>
    )
  }
}
const tranLink = css`
margin-left: 10px;
`
export default MainPage
