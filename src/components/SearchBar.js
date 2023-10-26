import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ handleSearchNote }) => {

    return (
        <>
            <div className="flex items-center bg-gray-300 rounded-md m-4 p-1 text-dark">
                <MdSearch className="mr-2" size="1.3em"/>
                <input onChange={(event)=>handleSearchNote(event.target.value)} className="w-full border-none resize-none outline-none bg-gray-300 text-dark" type="text" placeholder="Type to search ...." />
            </div>
        </>
    )
}

export default SearchBar;