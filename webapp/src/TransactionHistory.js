import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import EditTransaction from './EditTransaction'

class TransactionHistory extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      chosenTransaction: {}
    }
    this.chosenEdit = this.chosenEdit.bind(this)
  }

  chosenEdit (transaction) {
    this.setState({ chosenTransaction: transaction })
  }

  render () {
    const { chosenTransaction } = this.state
    const { transactionHistory, cancelTransaction, saveEditedTransaction } = this.props
    let count = 0
    return (
      <Router>
        <h3 css={Title}> Transaction History </h3>
        <div css={TH} >
          {transactionHistory.history.map((transaction) => {
            transaction.id = count
            const { amount, description, credit } = transaction
            let type = ''
            if (credit) {
              type = 'Credit'
            } else {
              type = 'Debit'
            }
            return (
              <div css={singleTransaction} key={count++}>
            Amount: <u>{amount}</u>
                <div css={typeCSS}>
              Type: <u>{type}</u>
                </div>
                <br />
            Description:
                <br />
                <textarea css={textareaCss} value={description} />
                <br />
                <button onClick={() => this.chosenEdit(transaction)}><Link to='/EditTransaction'>Edit Transaction</Link></button>
                <button onClick={() => cancelTransaction(transaction)}>Cancel Transaction</button>
              </div>
            )
          })}
          <Route exact path='/EditTransaction' render={(props) => <EditTransaction chosenTransaction={chosenTransaction} saveEditedTransaction={saveEditedTransaction} />} />
        </div>
      </Router>
    )
  }
}
TransactionHistory.propTypes = {
  transactionHistory: PropTypes.object,
  cancelTransaction: PropTypes.function,
  saveEditedTransaction: PropTypes.function
}
const TH = css`
margin-left: 35%;
list-style-type: none;
width: 30%;
`
const Title = css`
margin-left: 43%;
`
const singleTransaction = css`
padding: 10px;
border: solid;
margin: 5px;
background: beige;
font-size: 19px;
`
const textareaCss = css`
font-size: 17px;
`
const typeCSS = css`
float: right;
`
export default TransactionHistory
