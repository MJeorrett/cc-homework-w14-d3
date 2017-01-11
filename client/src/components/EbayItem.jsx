import React from 'react'

const EbayItem = function({ item }) {

  const price = item.sellingStatus[0].currentPrice[0].__value__
  const imgUrl = item.galleryURL[0]

  return (
    <div>
      <h3>{ item.title }</h3>
      <p>{ `Price: £${price}` }</p>
      <img src={ imgUrl } />
    </div>
  )
}

export default EbayItem
