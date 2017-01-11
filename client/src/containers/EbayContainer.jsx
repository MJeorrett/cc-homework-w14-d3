import React from 'react'

import ebayData from '../MockEbayData'

class EbayContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      items: ebayData.findItemsByKeywordsResponse[0].searchResult[0].item
    }
  }

  render() {
    return (
      <div>
        <h1>Ebay Container</h1>
        { JSON.stringify( this.state.items ) }
      </div>
    )
  }

}

export default EbayContainer
