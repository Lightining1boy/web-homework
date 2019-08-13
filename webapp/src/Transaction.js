import React from 'react'
import { css } from '@emotion/core'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class Transaction extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      credit: false,
      debit: false,
      amount: '',
      description: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sendData = this.sendData.bind(this)
  }

  sendData () {
    const { sendTransaction } = this.props
    const { credit, debit, amount, description } = this.state
    if (amount === '' || description === '') {
      alert('Amount or Description is left blank')
    } else if (credit === false && debit === false) {
      alert('Must select Credit or Debit')
    } else {
      sendTransaction(this.state)
    }
  }

  handleChange (event) {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleClick (type) {
    if (type === 'credit') {
      this.setState({ 'credit': true, 'debit': false })
    }
    if (type === 'debit') {
      this.setState({ 'credit': false, 'debit': true })
    }
  }

  render () {
    const { amount, description } = this.state
    return (
      <div css={outline}>
        <ul css={list}>
          <li css={listItem}>
            Amount: <input name='amount' onChange={(e) => this.handleChange(e)} value={amount} />
          </li>
          <li css={listItem}>
            <button onClick={() => this.handleClick('credit')} /> Credit
          </li>
          <li css={listItem}>
            <button onClick={() => this.handleClick('debit')} /> Debit
          </li>
          <li css={listItem}>
              Description <input name='description' onChange={(e) => this.handleChange(e)} value={description} />
          </li>
          <li>
            <button css={sendButton} onClick={this.sendData}>
              <Link to='/'> Send </Link>
            </button>
          </li>
          <li css={listItem}>
            <Link to='/'>Cancel</Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default Transaction

const sendButton = css`
  border: transparent;
  font-size: 17px;
`
const outline = css`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
background-color: rgba(0,0,0, 0.5);
`
const list = css`
position: absolute;
left: 25%;
right: 30%;
top: 25%;
bottom: 57%
margin: auto;
background: white;
list-style-type: none;
padding: 10px;
border-radius: 10px;
`
const listItem = css`
padding: 5px;
`
