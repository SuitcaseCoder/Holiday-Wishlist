import React from 'react'
import Item from '../components/Item';

const WishList = ({wishlistItems}) => {
    return (
        <div>
            my wishlist: 
            {wishlistItems.map(item => {
                return (
                    <Item key={item.id} item={item} />
                )
            })}
            {/* <div>{wishlistItems[0].item}</div> */}
        </div>
    );
};

export default WishList;
