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
  }

  cancelTransaction (transaction) {
    console.log(transaction)
  }

  sendTransaction (transaction) {
    const newHistory = Object.assign({}, fakeData)
    newHistory.history.unshift(transaction)
    this.setState({ transactionHistory: newHistory })
  }

  render () {
    const { transactionHistory } = this.state
    return (
      <Router>
        <Link css={tranLink} to='/transaction'> Make Transaction </Link>
        <TransactionHistory cancelTransaction={this.cancelTransaction} transactionHistory={transactionHistory} />
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
