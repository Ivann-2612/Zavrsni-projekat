import {StyledSearch} from '../styledComponents/StyledSearch'

const Search = ({ search,setSearch }) => {
    return (
        <StyledSearch>
            <input type="search" placeholder="Search news..." onChange={(e) => setSearch(e.target.value) }/>
           
        </StyledSearch>
    )
}

export default Search