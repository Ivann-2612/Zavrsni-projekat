import {StyledSearch} from '../styledComponents/StyledSearch'

const Search = ({ setSearch }) => {
    return (
        <StyledSearch>
            <input type="search" placeholder="Search..." onChange={(e) => setSearch(e.target.value) }/>
        </StyledSearch>
    )
}

export default Search