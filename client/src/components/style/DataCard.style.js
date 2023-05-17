import styled from "styled-components";

export const DataCardStyle = styled.div`
  /* border: 1px solid black;    */
  width: 90%;
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  background-color: ${(props) => props.theme.formBg};
  box-shadow: 2px 2px 6px ${(props) => props.theme.formShadow};
  position: relative;

  h2 {
    font-size: 24px;
    margin: 0;
    font-weight: 800;
    line-height: 1.2;
  }

  span {
    display: table;
  }

  & > span:nth-of-type(1) {
    font-size: 14px;
    color: ${(props) => props.theme.formHeading};
  }

  & > span:nth-of-type(2) {
    font-size: 18px;
    font-weight: 500;
    margin: 2px 0 4px;
  }

  p {
    font-size: 15px;
    font-weight: 500;
    color: ${(props) => props.theme.formHeading};
  }

  .delete_task {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 18px;
    opacity: 0.5;
  }

  .delete_task:hover {
    opacity: 1;
  }
`;
