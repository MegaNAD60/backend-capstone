import { useState } from "react";

function PostMenus(){

    //STATE VARIABLES
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [inventory, setInventory] = useState('');
    const [loading, setLoading] = useState(false);


    function handleSubmit(e){
        e.preventDefault();
        const menu = {title, price, inventory};
        setLoading(true)

        fetch('http://127.0.0.1:8000/menu', {
            method: 'Post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(menu)
        })
        .then(() => {
            console.log('new menu added')
            setLoading(false)
        })
    }


    return(
        <>
        <center>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                /><br/><br/>
                <input
                    type="number"
                    placeholder="price..."
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                /><br/><br/>
                <input
                    type="number"
                    placeholder="inventory..."
                    value={inventory}
                    onChange={(e) => setInventory(e.target.value)}
                    required
                /><br/><br/>
                { !loading && <button>Send Data to Server</button> }
                { loading && <button>Loading Data to Server</button> }
            </form>
            <p>{title}</p>
        </center>

        </>
    )
}

export default PostMenus;
