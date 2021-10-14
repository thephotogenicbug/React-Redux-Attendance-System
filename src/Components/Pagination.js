import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  //  console.log(showPerPage);

  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 2rem;
    align-items: center;

    @media screen and (min-width: 320px) and (max-width: 1080px) {
      display: flex;
      justify-content: space-evenly;
    }
  `;
  const StyledButton = styled.button`
    display: block;
    background-color: transparent;
    color: #f7797d;
    font-size: 2rem !important;
    border: none;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
    transition: 0.4s ease-in-out;
    &:hover {
      color: #e8291c;
    }

    @media screen and (min-width: 320px) and (max-width: 1080px) {
      margin: 2rem;
    }
  `;

  return (
    <Container>
      <StyledButton onClick={() => onButtonClick("prev")}>
        <i class="fas fa-arrow-circle-left"></i>
      </StyledButton>
      <StyledButton onClick={() => onButtonClick("next")}>
        <i className="fas fa-arrow-circle-right"></i>
      </StyledButton>
    </Container>
  );
};

export default Pagination;

// <div className="d-flex justify-content-between">
//     <button
//       className="btn btn-primary btn-sm"
//       onClick={() => onButtonClick("prev")}
//     >
//       Previous
//     </button>
//     <br />
//     <button
//       className="btn btn-primary btn-sm"
//       onClick={() => onButtonClick("next")}
//     >
//       Next
//     </button>
//   </div>
