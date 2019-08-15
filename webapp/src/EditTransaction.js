import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

class EditTransaction extends React.Component {
  constructor (props) {
    super(props)
    const { amount, description, credit, debit } = this.props.chosenTransaction
    this.state = {
      amount: amount,
      description: description,
      credit: credit,
      debit: debit
    }
    this.edit = this.edit.bind(this)
  }

  edit (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render () {
    const { amount, description } = this.state
    return (
      <div css={outline}>
        <ul css={list}>
          <li css={listItem}>
            Amount: <input name='amount' onChange={(e) => this.edit(e)} value={amount} />
          </li>
          <li>
            <select onChange={(e) => this.handleClick(e)}>
              <option value='credit'>Credit</option>
              <option value='debit'>Debit</option>
            </select>
          </li>
          <li css={listItem}>
              Description <input name='description' onChange={(e) => this.edit(e)} value={description} />
          </li>
          <li>
            <button css={saveButton} >
              <Link to='/'> Save </Link>
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

const saveButton = css`
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
export default EditTransaction
