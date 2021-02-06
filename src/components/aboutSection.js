import styled from 'styled-components'

const AboutSection = () => {
    return (
        <StyledAboutSection className="about-section">
            <StyledDescription className="description">
                <div className="title">
                    <StyledHidenDiv className="hide">
                        <h2>Architecture</h2>
                    </StyledHidenDiv>
                    <StyledHidenDiv className="hide">
                        <h2>to host <span>tomorrow's</span></h2>
                    </StyledHidenDiv>
                    <StyledHidenDiv className="hide">
                        <h2>episode.</h2>
                    </StyledHidenDiv>
                </div>
                <p>Explore exteriors from around the world — from brutalist buildings to minimalist structures that will give you a new appreciation for the art of architecture.</p>
                <button>Learn more</button>
            </StyledDescription>
            <StyledImageDiv className="img">
                <img src="https://images.unsplash.com/photo-1512216786910-dc41f81de76d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop" alt="company" />
            </StyledImageDiv>
        </StyledAboutSection>
    )
}

// Style component
const StyledAboutSection = styled.section`
    min-height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 10rem;
    color: #ffffff;
`;
const StyledDescription = styled.div `
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }
    
`;
const StyledImageDiv = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const StyledHidenDiv = styled.div`
    overflow: hidden;
`;

export default AboutSection;