import React from 'react'
import fakeData from './fakeData'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
const TransactionList = (props) => {
  const { merchantClicked } = props
  return (
    <ul>
      {fakeData.stores.map((store) => {
        return (
          <li key={store}>
            <button css={merchantButton} onClick={() => merchantClicked(store)}>
              <Link to='/transaction'>{store}</Link>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
export default TransactionList

const merchantButton = css`

`
