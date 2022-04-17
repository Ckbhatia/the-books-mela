import React from "react";
import styled from "styled-components";
import { STATUS } from "../constants";
import { getVolumes } from "../services";
import { booksResultMock } from "../__mock__/search";
import Books from "./Books";
import Spinner from "./Common/Spinner";

const Search = ({ isTestMode = false }) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [searchedBooks, setSearchedBooks] = React.useState<any>([]);
  const [status, setStatus] = React.useState<any>(STATUS.IDLE);

  React.useEffect(() => {
    // Note: this supposed to run for test mode only
    if (isTestMode) {
      setStatus(STATUS.PENDING);
      setSearchedBooks(booksResultMock);
      setStatus(STATUS.RESOLVED);
    }
  }, [isTestMode]);

  const handleSearch = () => {
    setStatus(STATUS.PENDING);
    const query = inputValue.replace(/\s/g, "+");

    getVolumes(query)
      .then((res: any) => res.json())
      .then((response: any) => {
        setStatus(STATUS.RESOLVED);
        setSearchedBooks(response?.items);
      });
  };
  return (
    <StyledMainContainer>
      <StyledSearchContainer>
        <StyledInputContainer
          type="taxt"
          value={inputValue}
          onChange={(e) => setInputValue(e?.target?.value)}
          placeholder="Search books"
          onKeyUp={(e) => {
            if (inputValue.length && e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <StyledSearchButton
          onClick={handleSearch}
          disabled={!inputValue.length}
        >
          Search
        </StyledSearchButton>
      </StyledSearchContainer>

      {status === STATUS.PENDING ? (
        <StyledSpinnerContainer>
          <Spinner />
        </StyledSpinnerContainer>
      ) : null}

      {status === STATUS.RESOLVED ? <Books books={searchedBooks} /> : null}
    </StyledMainContainer>
  );
};

export default Search;

const StyledMainContainer = styled.div``;

const StyledSearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 88px;
`;

const StyledInputContainer = styled.input`
  font-size: 16px;
  font-weight: 500;
  width: 90%;
  height: 32px;
  padding: 8px 24px;
  border-radius: inherit;
  border: 1px solid #dbdbdb;
`;

const StyledSearchButton = styled.button`
  min-height: 32px;
  font-size: 16px;
  font-weight: 500;
  width: 10%;
  padding: 8px 0;
  background-color: #f5f5f5;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  border-radius: inherit;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledSpinnerContainer = styled.div`
  width: 100%;
  height: 66vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
