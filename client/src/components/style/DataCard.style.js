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
    font-weight: 600;
    margin: 2px 0 0px;
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

export const DataCardSkeletonStyle = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  background-color: ${(props) => props.theme.formBg};
  box-shadow: 2px 2px 6px ${(props) => props.theme.formShadow};

  h2 {
    height: 22px;
    background-color: ${(props) => props.theme.skeletonCardBack};
    width: 40%;
  }

  span {
    height: 14px;
    display: block;
    margin: 10px 0;
    background-color: ${(props) => props.theme.skeletonCardBack};
    width: 30%;
  }

  p {
    margin: 10px 0;
    height: 14px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.skeletonCardBack};

    &:last-child {
      width: 80%;
    }
  }

  .skeleton-box {
    position: relative;
    overflow: hidden;
  }

  .skeleton-box::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      rgba(${(props) => props.theme.skeletonCardAnimation}, 0) 0,
      rgba(${(props) => props.theme.skeletonCardAnimation}, 0.2) 20%,
      rgba(${(props) => props.theme.skeletonCardAnimation}, 0.5) 60%,
      rgba(${(props) => props.theme.skeletonCardAnimation}, 0)
    );
    transform: translateX(-100%);
    animation: shimmer 2000ms infinite;
    z-index: 1;
  }

  @keyframes shimmer {
    100% {
      transform: translate(100%);
    }
  }
`;
