import {createGlobalStyle} from 'styled-components';

const StyledGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Sk-Modernist";
}

body {
  background: #1b1b1b;
}

.App {
    max-width: 1912px;
    margin: 0 auto; 
    width: 96%
}

button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    background: transparent;
    font-family: "Bigilla";
    padding: 1rem 2rem;
    border: 1px solid #ffffff;
    color: #ffffff;
    transition: all 0.5s ease;
    &:hover {
        background-color: #ffffff;
        color: #8f5f37;
        border: 1px solid #1b1b1b;
    }
}

h2 {
    color: #ffffff;
    font-weight: lighter;
    font-size: 4rem;
}
h3 {
    color: #ffffff;
}
h4 {
    font-weight: bold;
    color: #d8d5d5;
    font-size: 2rem;
}
p {
    padding: 3rem 0rem;
    color: #cccccc;
    font-size: 1.4rem;
    line-height: 150%;
    font-family: "Bigilla";

}
span {
    font-weight: bold;
    color: #8f5f37;
    font-family: "Bigilla";
}
a{
    font-size: 1.1rem;
    font-family: "Bigilla";

}
svg {
    color: #ffffff;
}
`;

export default StyledGlobal;