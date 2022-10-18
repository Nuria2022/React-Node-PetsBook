import "./SearchBar.css";

const SearchBar = ({setfilterWord}) => {
    return (
    <input type="text" id="search" className="searchbar" onChange={() => setfilterWord 
        (search.value.toLowerCase())} placeholder="Search by name"/>
        
        
    )
};

export default SearchBar
