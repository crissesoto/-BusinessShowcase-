import styled from 'styled-components'
// Reusable styles
import {StyledSection} from '../layoutStyles';

const FAQ = () => {
    return (
        <StyledFAQsection className="faq-section">
            <h2>Any Questions? <span>FAQ</span></h2>
            <div className="question-container">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question-container">
                <h4>Dayly calendar?</h4>
                <div className="answer">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
                </div>
                    <div className="faq-line"></div>
            </div>
            <div className="question-container">
                <h4>Payment methods?</h4>
                <div className="answer">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question-container">
                <h4>What services do you offer?</h4>
                <div className="answer">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </StyledFAQsection>
    )
};

const StyledFAQsection = styled(StyledSection)`
    display: block;
    span {
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%
    }
    .question-container {
        padding: 3rem 0;

        p{
            padding: 1rem 0;
        }
    }
`;

export default FAQ;