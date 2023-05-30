
const LogIn = () => {
    return (
        <>
            <section className="menu-form">
                <center>
                    <form>
                        <input
                            type="text"
                            placeholder="Insert username"
                            value=''
                            required
                        /><br /><br />
                        <input
                            type="number"
                            placeholder="Insert password"
                            value=''
                            required
                        /><br /><br />
                        <button>Log In</button>
                    </form>
                </center>
            </section>
        </>    )
}

export default LogIn;