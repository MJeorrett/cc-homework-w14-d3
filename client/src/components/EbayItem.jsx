import React from 'react'

import FreeAgentButton from './FreeAgentButton'

const EbayItem = function({ item }) {

  const title = item.title;
  const price = item.sellingStatus[0].currentPrice[0].__value__
  const imgUrl = item.galleryURL[0]

  return (
    <div className="ebay-item-container">
      <h3 className="ebay-item-title">{ title }</h3>
      <p className="ebay-item-price">{ `£${price}` }</p>
      <FreeAgentButton
        description={ title }
        price={ price }
      />
    <hr className="ebay-item-divider"/>
      <br />
      <img src={ imgUrl } />
    </div>
  )
}

export default EbayItem
