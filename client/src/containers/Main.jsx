import React from 'react'

import XmlHttpHelper from '../helpers/XmlHttpHelper'

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    XmlHttpHelper.get( "https://api.github.com/users/MJeorrett/repos", ( reposObj ) => {
      console.log( "reposObj:", reposObj )
    })
  }

  render() {
    return (
      <h1>Matthew's GitHub Reader</h1>
    )
  }

}

export default Main
