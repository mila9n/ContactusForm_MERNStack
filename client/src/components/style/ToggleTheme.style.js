import styled from "styled-components";

export const ToggleStyle = styled.div`
  display: flex;
  width: 50px;
  height: 40px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  .moon,
  .sun {
    position: absolute;
    inset: 0;
    margin: auto;
    height: 25px;
    width: 25px;
    font-size: 25px;
    transition: top 300ms ease-in-out, bottom 300ms ease-in-out;
  }

  .sun {
    color: orange;
  }

  .moon {
    color: yellow;
  }

  .moon_dark {
    top: -64px;
  }

  .sun_light {
    bottom: -64px;
  }

  @media (max-width: 400px) {
    .moon,
    .sun {
      height: 20px;
      width: 20px;
    }
  }
`;
