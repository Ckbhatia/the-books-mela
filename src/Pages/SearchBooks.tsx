import styled from "styled-components";
import Search from "../Components/Search";

const SearchBooks = () => {
  return (
    <StyledMainContainer>
      <StyledHeadingContainer>
        <h1>Search Books</h1>
      </StyledHeadingContainer>
      <Search />
    </StyledMainContainer>
  );
};

export default SearchBooks;

const StyledMainContainer = styled.main`
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
