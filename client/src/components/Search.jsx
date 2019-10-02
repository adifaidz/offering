import React, { useState } from 'react';
import { Field, Control, Input, Button} from 'bloomer';

function Search({ onSearch }){
    const [query, setQuery] = useState('');

    const handleChange = event => {
        setQuery(event.target.value);
    }

    const handleKeyUp = event => {
        console.log('Handling key up...');
        if (event.key === 'Enter'){
            onSearch(query);
            event.preventDefault();
        }
    }
    return ( 
        <Field hasAddons="centered">
            <Control isExpanded>
                <Input type="text" onChange={handleChange} isFullWidth onKeyUp={handleKeyUp}/>
            </Control>
            <Control>
                <Button isColor="primary" onClick={ () => onSearch(query)} >Search</Button>
            </Control>
        </Field>
    );
}
 
export default Search;