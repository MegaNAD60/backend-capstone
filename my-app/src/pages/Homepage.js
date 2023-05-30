import Card from '../components/Card';
import bgimg from '../images/restaurant_inside.jpg'
import { Link } from "react-router-dom";


function HomePage() {

    const hero = {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "75%",
        color: "white",
        minHeight: "400px",
        textAlign: "center",
        padding: "0.5rem",
    }

    const hero_h1 = {
        textShadow: "1px 1px 4px #333333",
        fontFamily: 'Markazi Text',
        letterSpacing: "2px",
        fontSize: "4rem",
        marginTop: "5.5rem",
        marginBottom: "0",
    }

    const hero_p = {
        fontSize: "2rem",
        margin: "1rem",
        textShadow: "2px 2px 4px #333333",
    }

    const btn = {
        color: "rgba(255, 255, 255, 0.9)",
        width: "200px",
        fontWeight: "bold",
        fontSize: "1.5rem",
        padding: "8px",
        textAlign: "center",
        outline: "none",
        textDecoration: "none",
        margin: "1rem",
        border: "3px solid white"
    }

    return (
        <>
            <section style={hero}>
                <h1 style={hero_h1}>SPECIAL OFFER</h1>
                <p style={hero_p}>30% off This Weekend</p>

                <Link
                    to="#"
                    style={btn}>
                    Book Now
                </Link>
            </section>
            <div className='container'>
                <section className='card-section'>
                    <Card />
                </section>
            </div>
        </>
    )
}

export default HomePage;