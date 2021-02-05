
const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Architecture</h2>
                    </div>
                    <div className="hide">
                        <h2>to host tomorrow's</h2>
                    </div>
                    <div className="hide">
                        <h2>episode.</h2>
                    </div>
                </div>
                <p>Explore exteriors from around the world — from brutalist buildings to minimalist structures that will give you a new appreciation for the art of architecture.</p>
                <button>Learn more</button>
            </div>
            <div className="img">
                <img src="https://images.unsplash.com/photo-1465829235810-1f912537f253?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="company" />
            </div>
        </div>
    )
}

export default AboutSection;