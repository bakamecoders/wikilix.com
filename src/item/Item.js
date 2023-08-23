import React, { useState } from 'react'
import './ItemStyle.css'
import pc_image from './assets/computer.png'
import phone_img from './assets/phone.png'

const Item = (props) => {

    const [shopStatus, setShopStatus] = useState('Shop Now')

    function toogleShopStatus()
    {
        if(shopStatus === 'Shop Now')
        {
            setShopStatus('Shopped')
        }
        else
        {
            setShopStatus('Shop Now')
        }    
    }
    const category = props.category;
    let item_image = null;
    if(category === 'pc')
    {
        item_image = pc_image;
    }
    else if(category === 'phone')
    {
        item_image = phone_img;
    }
    else
    {
        item_image = pc_image;
    }
  return (
    <div className='item-container'>
        <img src={item_image} className='item-img'/>
        <p className='link-container'><a onClick={() => {toogleShopStatus()}} className='shop-link'>{shopStatus}</a></p>
    </div>
  )
}

export default Item
