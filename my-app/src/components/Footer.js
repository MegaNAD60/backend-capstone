
const img = require('../images/logo_footer.png')


const Footer = () => {
    return (
        <>
            <section className="footer">
                <img src={img} alt='' />
                <p>Copywrite Little Lemon</p>
            </section>
        </>
    )
}

export default Footer;