import styled from 'styled-components'

// Reusable style component
export const StyledSection = styled.section`
    min-height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem;
    color: #ffffff;
`;
export const StyledDescription = styled.div `
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }
    
`;
export const StyledImageDiv = styled.div`
    z-index: 2;
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const StyledHidenDiv = styled.div`
    overflow: hidden;
`;
