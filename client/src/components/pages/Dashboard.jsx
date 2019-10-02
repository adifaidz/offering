import React, {useState} from 'react';
import { Section, Container, Columns, Column, Title } from 'bloomer';
import Items from '../Items';

function Dashboard(props){
    const [bookmarks, setBookmarks] = useState(() => localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')) : []);
    const [items, setItems] = useState(() => localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')) : []);

    const handleBookmark = (item) => {
        console.log('Bookmarking...')
        const found = bookmarks.findIndex(bookmark => bookmark.hash_name === item.hash_name);
        let newBookmarks;
        if (found < 0) {
            const { hash_name, asset_description, sell_price_text } = item;
            newBookmarks = [...bookmarks, { hash_name, sell_price_text, asset_description: { icon_url: asset_description.icon_url, name_color: asset_description.name_color } }];
        }
        else {
            bookmarks.splice(found, 1)
            newBookmarks = [...bookmarks];
        }

        setBookmarks(newBookmarks);
        localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    };
    
    return (
        <Section>
            <Container>
                <Columns>
                    <Column isSize="half">
                        <Items
                            items={items}
                            bookmarks={bookmarks}
                            onBookmark={handleBookmark}>
                        </Items>
                    </Column>
                    <Column isSize="half">
                        <Title>Bookmark Detail</Title>
                    </Column>
                </Columns>
            </Container>
        </Section>
    );
}

export default Dashboard;