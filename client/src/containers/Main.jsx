import React from 'react'
import { Link } from 'react-router'

class Main extends React.Component {

  render() {
    return (
      <div>
        <h1>FreeAgent for Ebay</h1>
        <nav>
          <Link to="/ebay">Ebay</Link>
          <br />
          <Link to="/free-agent">FreeAgent</Link>
        </nav>
        { this.props.children }
      </div>
    )
  }
}

export default Main
