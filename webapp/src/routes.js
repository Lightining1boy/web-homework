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
      transactionHistory: []
    }

    this.merchantClicked = this.merchantClicked.bind(this);
  }

  merchantClicked (store) {
    this.setState({ clickedStore: store })
  }

  render () {
    return (
      <Router>
        <TransactionList merchantClicked={this.merchantClicked} />
        <Route exact path='/' />
        <Route component={Transaction} exact path='/transaction' />
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
