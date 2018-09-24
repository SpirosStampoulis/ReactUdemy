import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//     return <input />;
// };

//every class should have render
class SearchBar extends Component {
    constructor (props) {
        super(props);
        // only class component can have state
        this.state = { term: ''};
    }
    render() {
        // return <input onChange={event => this.onInputChange} />;

        //dont use parenthesis on a sinlge value (event)
        // return <input onChange={event => console.log(event.target.value)} />;
        return (
            <div>
            <input onChange={event => this.setState({ term: event.target.value })} />
            Value of the input: {this.state.term}
            </div>
           
        );
    }


    // onInputChange(event) {
        //console what we type
        // console.log(event.target.value);
        // console.log(event);
    // }
}
export default SearchBar;