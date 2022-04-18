import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../Components/Common/Spinner";
import { STATUS } from "../constants";
import { getBookWithId } from "../services";
import { booksResultMock } from "../__mock__/search";

const BookDetails = ({ isTestMode = false }) => {
  const [bookDetails, setBookDetails] = React.useState<any>(null);
  const [status, setStatus] = React.useState<any>(STATUS.IDLE);

  const { id } = useParams();

  React.useEffect(() => {
    if(isTestMode) {
      setStatus(STATUS.PENDING);
      setBookDetails(booksResultMock[1]?.volumeInfo);
      setStatus(STATUS.RESOLVED);
    }
  }, [isTestMode])

  React.useEffect(() => {
    if (id) {
      setStatus(STATUS.PENDING);
      getBookWithId(id)
        .then((res: any) => res.json())
        .then((response: any) => {
          setStatus(STATUS.RESOLVED);
          const valumeInfo = response?.volumeInfo;
          if (valumeInfo) {
            setBookDetails(valumeInfo);
          }
        });
    }
  }, [id]);

  const author = bookDetails?.authors?.[0];
  const description = bookDetails?.description;
  const thumbnail = bookDetails?.imageLinks?.thumbnail;
  const publishedDate = bookDetails?.publishedDate;
  const publisher = bookDetails?.publisher;
  const subtitle = bookDetails?.subtitle;
  const title = bookDetails?.title;

  return (
    <StyledMainContainer data-testid="book-details-page">
      <StyledButtonContainer>
        <Link to="/search">
          <button>Back</button>
        </Link>
      </StyledButtonContainer>
      {status === STATUS.PENDING ? (
        <StyledSpinnerContainer>
          <Spinner />
        </StyledSpinnerContainer>
      ) : null}
      {status === STATUS.RESOLVED ? (
        <StyledBookDetailsContainer>
          <StyledBookImageContainer>
            <img src={thumbnail} alt="book" />
          </StyledBookImageContainer>
          <StyledBookOtherInfo>
            <StyledBookTitle>{title}</StyledBookTitle>
            <StyledSubTitle>{subtitle}</StyledSubTitle>
            <StyledBookAuthor>By {author}</StyledBookAuthor>
            <StyledPublishDetailsContainer>
              <span>Published on {publishedDate}</span>
              <span>by {publisher}</span>
            </StyledPublishDetailsContainer>
            <StyledBookDescriptionContainer
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </StyledBookOtherInfo>
        </StyledBookDetailsContainer>
      ) : null}
    </StyledMainContainer>
  );
};

export default BookDetails;

const StyledMainContainer = styled.main`
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
`;

const StyledButtonContainer = styled.div`
  margin-top: 100px;

  button {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: #353535;
    width: 160px;
    height: 42px;
    border-radius: 4px;
    background-color: #f5f5f5;
    border: 1px solid #e6e6e6;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const StyledSpinnerContainer = styled.div`
  width: 100%;
  height: 76vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBookDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 40px;
  margin-top: 80px;
`;
const StyledBookImageContainer = styled.div`
  width: 20%;
  img {
    width: 100%;
    height: auto;
  }
`;
const StyledBookOtherInfo = styled.div`
  width: 60%;
`;
const StyledBookTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin: 15px 0;
  color: #000;
`;
const StyledSubTitle = styled.h3`
  margin: 10px 0;
  font-size: 22px;
  font-weight: 500;
  color: #3c4043;
`;
const StyledBookAuthor = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #70757a;
`;
const StyledPublishDetailsContainer = styled.div`
  margin: 12px 0;
  margin-bottom: 18px;
  display: flex;
  flex-direction: row;
  column-gap: 20px;

  font-size: 16px;
  font-weight: 500;
  color: #70757a;
`;

const StyledBookDescriptionContainer = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #202124;
`;
