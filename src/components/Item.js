import React from 'react'

    const Item = ({item}) => {
        console.log("item: ", item.item);
        return (
            <div>
                <div id={item.id} key={item.id} name="item" value={item.id}>{item.item}</div>
            </div>
        )
    }


export default Item
