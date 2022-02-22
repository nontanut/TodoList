import TextFilter from "./TextFilter";
import StatusFilter from "./StatusFilter";

const SearchBar = (props) => {
    return (
        <div className="mt-4 d-flex">
            <TextFilter
                setSearchText={props.setSearchText}
                searchText={props.searchText}
            />
            <StatusFilter
                setSearchStatus={props.setSearchStatus}
                searchStatus={props.searchStatus}
            />
        </div>
    );
}

export default SearchBar;