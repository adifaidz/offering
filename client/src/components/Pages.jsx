import React from 'react';
import { Pagination, Page, PageList } from 'bloomer';
import { PageLink } from 'bloomer/lib/components/Pagination/PageLink';

function Pages({ pages, perPage, currentPage, onPaginate }){
    const createPages = () => {
        let list = [];
        if (pages <= 1)
            return;

        list.push(createPage(1, 1, '<<'));

        for (let i=0; i< pages; i++){
            const page = i+1;
            const start = page * perPage;

            if (Math.abs(currentPage - page) < 5){
                list.push(createPage(page, start));
            }
        }

        list.push(createPage(pages + 1, pages * perPage, '>>'));

        return list;
    }

    const createPage = (page, start, key) => {
        const label = key ? key : page;

        return <Page key={label} onClick={() => onPaginate(page, start)}> 
            <PageLink>{label }</PageLink>
        </Page>
    }

    return (  
        <Pagination isAlign="centered">
            <PageList>
                {createPages()}
            </PageList>
        </Pagination>
    );
}
 
export default Pages;