import React from 'react';
import Item from './Item';
import './Items.css'
 
function Items({items, bookmarks, onBookmark}){
    return (
        <div className="items">
            { items && items.map(item => {
                return <Item key={item.hash_name} item={item} bookmarks={bookmarks} onBookmark={onBookmark}/>
            })}
        </div>
    );
}
 
export default Items;