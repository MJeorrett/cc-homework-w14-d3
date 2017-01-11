import React from 'react'
import { Link } from 'react-router'

class Main extends React.Component {

  render() {
    return (
      <div>
        <h1>FreeAgent for Ebay</h1>
        <nav>
          <Link className='link' to="/ebay">Ebay</Link>
          <Link className='link' to="/free-agent">FreeAgent</Link>
        </nav>
        <hr />
        { this.props.children }
      </div>
    )
  }
}

export default Main
