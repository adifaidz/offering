import React from 'react';
import { Media, MediaLeft, Image, MediaContent, Content, Icon, MediaRight } from 'bloomer';
import './Item.css'

function Item({ item, bookmarks, onBookmark }){
    const getClassName = () => {
        const name = bookmarks.find(bookmark => bookmark.hash_name === item.hash_name) ? 'fas' : 'far';
        return name + ' fa-bookmark bookmark-button';
    }

    const labelStyle = {
        color: `#${item.asset_description.name_color}`
    }
        
    return (
        <Media isPaddingless isMarginless className="item">
            <MediaLeft>
                <Image className="item-image" src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.asset_description.icon_url}`} alt={item.hash_name} />
            </MediaLeft>
            <MediaContent className="item-content">
                <Content>
                    <p>
                        <span style={labelStyle}>{item.hash_name}</span>
                        <strong className="is-pulled-right">{item.sell_price_text}</strong>
                    </p>
                </Content>
            </MediaContent>
            <MediaRight>
                <Icon isSize='small' className={getClassName()} onClick={() => onBookmark(item)} />
            </MediaRight>
        </Media>
    );
}

export default Item;