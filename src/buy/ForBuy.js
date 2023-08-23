import React from 'react'
import Item from '../item/Item'
import './ForBuyStyle.css'
import underline_Img from './assets/Vector.png'
import left_arrow from './assets/left-arrow.png'
import right_arrow from './assets/right-arrow.png'

const ForBuy = () => {
  return (
    <div className='for-buy-container'>
      <center>

        <div className='computers-for-sell for-sell'>
            <div className='for-sell-title'>
                <h1>Computers For sell</h1>
                <img src={underline_Img} className='undeline_img'/>
            </div>
            <div className='for-sell-flex'>
                <div className='for-sell-btn-left'><img src={left_arrow} className='for-sale-icon'/></div>
                <div className='for-sell-items'>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                </div>
                <div className='for-sell-btn-right'><img src={right_arrow} className='for-sale-icon'/></div>
            </div>
        </div>


        <div className='phones-for-sell for-sell'>
            <div className='for-sell-title'>
                <h1>Phones For sell</h1>
                <img src={underline_Img} className='undeline_img'/>
            </div>
            <div className='for-sell-flex'>
                <div className='for-sell-btn-left'><img src={left_arrow} className='for-sale-icon'/></div>
                <div className='for-sell-items'>
                    <Item category="phone"/>
                    <Item category="phone"/>
                    <Item category="phone"/>
                    <Item category="phone"/>
                    <Item category="phone"/>
                    <Item category="phone"/>
                </div>
                <div className='for-sell-btn-right'><img src={right_arrow} className='for-sale-icon'/></div>
            </div>
        </div>


        <div className='lands-for-sell for-sell'>
            <div className='for-sell-title'>
                <h1>Lands For sell</h1>
                <img src={underline_Img} className='undeline_img'/>
            </div>
            <div className='for-sell-flex'>
                <div className='for-sell-btn-left'><img src={left_arrow} className='for-sale-icon'/></div>
                <div className='for-sell-items'>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                </div>
                <div className='for-sell-btn-right'><img src={right_arrow} className='for-sale-icon'/></div>
            </div>
        </div>



        <div className='houses-for-sell for-sell'>
            <div className='for-sell-title'>
                <h1>Houses For sell</h1>
                <img src={underline_Img} className='undeline_img'/>
            </div>
            <div className='for-sell-flex'>
                <div className='for-sell-btn-left'><img src={left_arrow} className='for-sale-icon'/></div>
                <div className='for-sell-items'>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                </div>
                <div className='for-sell-btn-right'><img src={right_arrow} className='for-sale-icon'/></div>
            </div>
        </div>

      </center>
    </div>
  )
}

export default ForBuy
