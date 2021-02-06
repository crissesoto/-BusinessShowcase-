import {createGlobalStyle} from 'styled-components';

const StyledGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  background: #1b1b1b;  
}

button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    background: transparent;
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
}
p {
    padding: 3rem 0rem;
    color: #cccccc;
    font-size: 1.4rem;
    line-height: 150%;
}
span {
    font-weight: bold;
    color: #8f5f37;
}
a{
    font-size: 1.1.rem;
}
svg {
    color: #ffffff;
}
`;

export default StyledGlobal;