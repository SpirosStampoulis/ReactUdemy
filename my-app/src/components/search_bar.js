import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//     return <input />;
// };

//every class should have render
class SearchBar extends Component {
    render() {
        //dont use parenthesis on a sinlge value (event)
        return <input onChange={event => console.log(event.target.value)} />;
    }

    onInputChange(event) {
        //console what we type
        // console.log(event.target.value);
        // console.log(event);

    }
}
export default SearchBar;