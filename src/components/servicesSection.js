import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt, faTools, faUserClock, faUsers } from '@fortawesome/free-solid-svg-icons'

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="services-container">
                <div className="description">
                    <h2>Primium <span>quality</span>services</h2>
                </div>
                <div className="cards-container">
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faUserClock} size="2x" />
                            <h3>Efficient</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMoneyBillAlt} size="2x" />
                            <h3>Affordable</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faTools} size="2x"/>
                            <h3>Pro Products</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faUsers} size="2x"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <img src="https://images.unsplash.com/photo-1512216786910-dc41f81de76d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=662&q=80" alt="companay services"/>
            </div>
        </section>
    )
}

export default ServicesSection;