//import { useParams } from "react-router";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";

const EditMenu = () => {

    //STATE VARIABLES
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [inventory, setInventory] = useState('');
    const [loading, setLoading] = useState(false);
//    const { menuid } = useParams();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/menu')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.error(err.message)
        })

    }, [])

    function handleSubmit(e){
        e.preventDefault();
        const menu = {title, price, inventory}
        setLoading(true)
    }


    return (
        <>
        <Nav />
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
                { !loading && <button>Edit Menu</button> }
                { loading && <button>Loading Edit to Server</button> }
            </form>
        </center>
        </>
    )
}

export default EditMenu;