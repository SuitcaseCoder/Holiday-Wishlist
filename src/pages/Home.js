import React from 'react'
import Heading from '../components/Heading';
import Form from '../components/Form';
import WishList from '../components/WishList';
import { useState } from 'react';
import data from '../data.json';

export default function Home() {
    const [ wishlistItems, setWishlistItems ] = useState(data);

    const addItem = (inputText) => {
        console.log(inputText);
        wishlistItems.push({id: wishlistItems.length+1, item: inputText });
        setWishlistItems(wishlistItems);
    }

    return (
        <div>
            <Heading />
            <Form addItem={addItem} />
            <WishList wishlistItems={wishlistItems} />
        </div>
    )
}
