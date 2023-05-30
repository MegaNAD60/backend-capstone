


const SignIn = () => {

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
                        <button>Sign In</button>
                    </form>
                </center>
            </section>
        </>
    )
}

export default SignIn;