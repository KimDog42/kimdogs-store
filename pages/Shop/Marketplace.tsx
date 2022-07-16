import React from 'react'
import MarketplaceContents from '../../components/Marketplace/MarketplaceContents'
import MarketPlaceFunction from '../../components/Marketplace/MarketPlaceFunction'
import TopBar from '../../components/TopBar'

function Marketplace() {
  return (
    <div>
        <TopBar/>
        <MarketPlaceFunction/>
        <MarketplaceContents/>
    </div>
  )
}

export default Marketplace