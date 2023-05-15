import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Inconsolata', monospace;
  background-color: ${(props) => props.theme.bodyBg};
  color:${(props) => props.theme.textColor};
  transition:background-color 350ms ease-in-out , color 300ms ease-in-out;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}
`;
