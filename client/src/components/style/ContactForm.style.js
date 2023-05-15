import styled from "styled-components";

export const ContactFormStyle = styled.div`
  width: 60%;
  max-width: 600px;
  margin: 40px auto 100px;
  padding: 15px 15px 15px;
  background-color: ${(props) => props.theme.formBg};
  box-shadow: 0px 0px 8px ${(props) => props.theme.formShadow};
  border-radius: 10px;
  transition: box-shadow 300ms ease-in-out, background-color 300ms ease-in-out;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin: 0 0 25px;

    h2 {
      font-size: 44px;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      color: ${(props) => props.theme.formHeading};
      transition: color 300ms ease-in-out;
    }
  }

  @media (max-width: 768px) {
    width: 75%;
  }

  @media (max-width: 550px) {
    width: 85%;

    & > div > h2 {
      font-size: 32px;
    }
  }

  @media (max-width: 400px) {
    width: 94%;
    margin: 30px auto;

    & > div > h2 {
      font-size: 28px;
    }
  }
`;
