import React from 'react'

import ebayData from '../MockEbayData'
import EbayItem from '../components/EbayItem'

class EbayContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      items: ebayData.findItemsByKeywordsResponse[0].searchResult[0].item
    }
  }

  render() {
    var ebayItemElements = this.state.items.map( ( item, index ) => {
      return <EbayItem key={ index } item={ item } />
    });

    return (
      <div className="content-container">
        { ebayItemElements }
      </div>
    )
  }

}

export default EbayContainer
