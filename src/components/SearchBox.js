import React from 'react';

const SearchBox = ({searchChange}) =>{
    return(
        <div className="pa3">
            <input className= "pa3 ba b--green bg-lightest-blue" type="search" placeholder="robots..." onChange={searchChange}></input>
        </div>
    )
}

export default SearchBox;