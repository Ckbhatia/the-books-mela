import { Link } from "react-router-dom";
import styled from "styled-components";

interface BooksProps {
  books: {
    id: string;
    volumeInfo: {
      title: string;
      authors: string[];
      imageLinks: {
        smallThumbnail: string;
      };
    };
  }[];
}

const Books: React.FC<BooksProps> = ({ books }) => {
  return (
    <StyledBooksResultContainer>
      {books && books?.length ? (
        <>
          <StyledHeaderContainer>
            <StyledHeader>Results</StyledHeader>
          </StyledHeaderContainer>
          <StyledBookListContainer>
            {books.map((book: any) => {
              const {
                id,
                volumeInfo: { title, authors, imageLinks },
              } = book;
              const author = authors?.[0];
              const smallThumbnail = imageLinks?.smallThumbnail;
              return (
                <StyledBookListItem key={id}>
                  <Link to={`/book/${id}`}>
                    <StyledImageContainer>
                      <img src={smallThumbnail} alt="book" />
                    </StyledImageContainer>
                    <StyledBookOtherInfo>
                      <StyledBookListItemTitle>{title}</StyledBookListItemTitle>
                      <StyledBookListItemAuthor>
                        {author}
                      </StyledBookListItemAuthor>
                    </StyledBookOtherInfo>
                  </Link>
                </StyledBookListItem>
              );
            })}
          </StyledBookListContainer>
        </>
      ) : null}
    </StyledBooksResultContainer>
  );
};

export default Books;

const StyledBooksResultContainer = styled.div`
  margin-top: 80px;
`;

const StyledHeaderContainer = styled.div`
  margin-bottom: 40px;
`;

const StyledHeader = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const StyledBookListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 0;
`;

const StyledBookListItem = styled.li`
  overflow: hidden;
  width: 135px;
  height: 100%;

  a {
    text-decoration: none;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledBookOtherInfo = styled.div`
  width: 100%;
`;

const StyledBookListItemTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin: 8px 0;
`;

const StyledBookListItemAuthor = styled.span`
  font-size: 15px;
  color: #2b2b2b;
  color: #000;
`;
