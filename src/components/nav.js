import styled from 'styled-components'

const Nav = () => {
    return (
        <StyledNav className="nav">
            <h1><a href="#">Showcase</a></h1>
            <ul>
                <li>
                    <a href="#"><span>1.</span>About us</a>
                </li>
                <li>
                    <a href="#"><span>2.</span>Our work</a>
                </li>
                <li>
                    <a href="#"><span>3.</span>Contact us</a>
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    margin: auto;
    padding: 2rem 5rem;
    color: #ffffff;

    h1 a{
        font-size: 2rem;
    }
    a {
    text-decoration: none;
    color: #ffffff;
    }


    ul {
        display: flex;
        list-style: none;

        li {
            position: relative;
            padding-left: 5rem;

            a{
                text-transform: uppercase;             
            }

            span {
                margin-right: 5px;
                color: #ffffff;  
            }
        }
    }
`;

export default Nav;
