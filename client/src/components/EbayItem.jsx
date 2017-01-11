import React from 'react'

const EbayItem = function({ item }) {

  const price = item.sellingStatus[0].currentPrice[0].__value__
  const imgUrl = item.galleryURL[0]

  return (
    <div className="ebay-item-container">
      <h3 className="ebay-item-title">{ item.title }</h3>
      <p>{ `Price: £${price}` }</p>
      <img src={ imgUrl } />
    </div>
  )
}

export default EbayItem
