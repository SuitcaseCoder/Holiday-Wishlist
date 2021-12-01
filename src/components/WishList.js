import React from 'react'
import Item from '../components/Item';

const WishList = ({wishlistItems}) => {
    return (
        <div className="wishlist">
            {wishlistItems.map(item => {
                return (
                    <Item className="item" key={item.id} item={item} />
                )
            })}
            {/* <div>{wishlistItems[0].item}</div> */}
        </div>
    );
};

export default WishList;
