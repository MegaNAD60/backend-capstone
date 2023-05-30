import { Link } from 'react-router-dom'
import '../App.css';


function Card(){


    const cards = {
        border: "1px solid #EDEFEE",
        margin: "10px",
    }

    const pho1 = require('../images/Grill.jpg')

    const pho2 = require('../images/salad.jpg')

    const pho3 = require('../images/head_chef.jpg')

    const pho = {
        width: "100%",
        height: "250px"
    }

    const ulStyle = {
        listStyle: "none",
    }

    return (
        <>
            <section className='article section' >
                <article className="articles one" style={cards}>
                    <h2>Our New Menu</h2>
                    <img src={pho1} alt="mypho" style={pho} />
                    <p>
                        Our menu consists of 12-15 seasonal items based on Italian, Greek, and Turkish culture.
                    </p>
                    <p>
                        <Link to="/Menus">See our Menu</Link>
                    </p>
                </article>

                <article className="articles two" style={cards}>
                    <h2>Our New Menu</h2>
                    <img src={pho2} alt="mypho" style={pho} />
                    <p>
                        Reserve your table for an Italian, Greek, and Turkish dining experience.
                    </p>
                    <p>
                        <Link to="/#">Book your table now</Link>
                    </p>
                </article>

                <article className='articles three' style={cards}>
                    <h2>Our New Menu</h2>
                    <img src={pho3} alt="mypho" style={pho} />
                    <p>
                        The Little Lemon Restaurant is open 7 days a week, except for public holidays.
                    </p>
                    <ul style={ulStyle}>
                        <li>Mon - Fri: 2pm - 10pm</li>
                        <li>Sat: 2pm - 11pm</li>
                        <li>Sun: 2pm - 9pm</li>
                    </ul>
                </article>

            </section>
        </>
    );
}

export default Card;