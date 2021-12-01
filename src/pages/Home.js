import React from 'react'
import Form from '../components/Form';
import WishList from '../components/WishList';
import { useState } from 'react';
import data from '../data.json';

export default function Home() {
    const [ wishlistItems, setWishlistItems ] = useState(data);

    const addItem = (inputText) => {
        console.log(inputText);
        const addedItems = [...wishlistItems, {id:wishlistItems.length+1, item: inputText}];
        setWishlistItems(addedItems);
    }

    return (
        <div className="home">
            <h1>My Holiday Wishlist</h1>
            <Form addItem={addItem} />
            <WishList wishlistItems={wishlistItems} />
        </div>
    )
}
