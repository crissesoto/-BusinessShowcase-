import styled from 'styled-components'
// Reusable styles
import {StyledSection, StyledDescription, StyledImageDiv} from '../layoutStyles';
// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt, faTools, faUserClock, faUsers } from '@fortawesome/free-solid-svg-icons'

const ServicesSection = () => {
    return (
        <StyledServicesSection className="services-section">
            <StyledDescription className="description">
                <h2>Primium <span>quality</span>services</h2>
                            <StyledCardsContainer className="cards-container">
                <StyledCard className="card">
                    <div className="icon">
                        <FontAwesomeIcon icon={faUserClock} size="2x" />
                        <h3>Efficient</h3>
                    </div>
                    <p>lorem ipsum dolor sit amet.</p>
                </StyledCard>
                <StyledCard className="card">
                    <div className="icon">
                        <FontAwesomeIcon icon={faMoneyBillAlt} size="2x" />
                        <h3>Affordable</h3>
                    </div>
                    <p>lorem ipsum dolor sit amet.</p>
                </StyledCard>
                <StyledCard className="card">
                    <div className="icon">
                        <FontAwesomeIcon icon={faTools} size="2x"/>
                        <h3>Pro Products</h3>
                    </div>
                    <p>lorem ipsum dolor sit amet.</p>
                </StyledCard>
                <StyledCard className="card">
                    <div className="icon">
                        <FontAwesomeIcon icon={faUsers} size="2x"/>
                        <h3>Teamwork</h3>
                    </div>
                    <p>lorem ipsum dolor sit amet.</p>
                </StyledCard>
            </StyledCardsContainer>
            </StyledDescription>
            <StyledImageDiv className="img-container">
                <img src="https://images.unsplash.com/photo-1465829235810-1f912537f253?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="companay services"/>
            </StyledImageDiv>
        </StyledServicesSection>
    )
};

const StyledServicesSection = styled(StyledSection)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const StyledCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StyledCard = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: #fff;
            color: #1b1b1b;
            padding: 0.5rem 0.8rem;
        }
    }
`;



export default ServicesSection;