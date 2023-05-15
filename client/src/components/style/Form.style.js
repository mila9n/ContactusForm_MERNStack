import styled from "styled-components";

export const FormStyle = styled.div`
  & > form {
    width: 100%;
  }

  form > div > label {
    display: table;
    font-size: 16px;
  }

  form > div > input,
  form > div > textarea {
    width: 100%;
    padding: 8px 14px;
    font-size: 17px;
    margin: 0 0 20px;
    outline: none;
    font-weight: 500;
  }

  form > div > input:focus,
  form > div > textarea:focus {
    border: 3px solid ${(props) => props.theme.formInput};
  }

  textarea {
    overflow: auto;
    height: 100px;
    resize: vertical;
  }

  button {
    padding: 5px 30px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid gray;
    font-weight: 500;
    background-color: ${(props) => props.theme.buttonBg};
    color: ${(props) => props.theme.buttonTxtColor};
    transition: all 300ms ease-in-out;
  }

  button:hover,
  button:focus {
    transform: scale(1.1);
  }

  @media (max-width: 400px) {
    button {
      display: block;
      margin: 0 auto;
    }
  }
`;
