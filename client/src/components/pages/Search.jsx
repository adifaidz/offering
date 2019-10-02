import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import Search from '../Search';
import Pages from '../Pages';
import Items from '../Items';
import { Column, Columns, Container, Section } from 'bloomer';

function Page() {
    const [bookmarks, setBookmarks] = useState(() => localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')) : []);
    const [perPage] = useState(50);
    const [lastQuery, setLastQuery] = useState(null);
    const [items, setItems] = useState([]);
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
    const isMounted = useRef(true);

    const handleSearch = async query => {
        console.log('Searching...');
        setLastQuery(query);
    }

    const handlePaginate = async (page, start) => {
        console.log('Paginating...')
        setStart(start);
        setCurrentPage(page);
    }

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

    useEffect(() => {
        async function fetchItems(){
            const { data } = await axios.get(`http://localhost:9000/items/?query=${lastQuery}&count=${perPage}&start=${start}`);
            setItems(data.results);
            setPages(Math.floor(data.total_count / perPage));
        }

        if(isMounted.current)
            isMounted.current = false;
        else 
            fetchItems();
    }, [lastQuery, perPage, start])
    
    return (
        <Section className="App">
            <Container>
                <Columns>
                    <Column isSize="1/2" isOffset="1/4">
                        <Search onSearch={handleSearch}></Search>
                        <div>
                            <Pages
                                pages={pages}
                                perPage={perPage}
                                currentPage={currentPage}
                                onPaginate={handlePaginate}>
                            </Pages>
                            <Items
                                items={items}
                                bookmarks={bookmarks}
                                onBookmark={handleBookmark}>
                            </Items>
                        </div> 
                    </Column>
                </Columns>
            </Container>
        </Section>
    );
}

export default Page;