import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditMenu = () => {

    //STATE VARIABLES
    const [id, idChange] = useState(0)
    const [title, titleChange] = useState('');
    const [price, priceChange] = useState('');
    const [inventory, inventoryChange] = useState('');
    const [loading, setLoading] = useState(false);

    const { menuid } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        getMenu();
    }, [])

    const getMenu = () => {
        fetch(`http://127.0.0.1:8000/menu/${menuid}`)
            .then((res) => res.json())
            .then((data) => {
                //            console.log(data);
                idChange(data.id);
                titleChange(data.title);
                priceChange(data.price);
                inventoryChange(data.inventory)
            }, [])
            .catch(error => console.error(error))
    };


    function handleSubmit(e) {
        e.preventDefault();
        const menu = { id, title, price, inventory };
        setLoading(true)

        fetch('http://127.0.0.1:8000/menu/' + menuid, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(menu)
        })
            .then(() => {
                console.log('new menu added')
                navigate(-1)
                setLoading(false)
            })
    }

    return (
        <>
            <section className="menu-edit-form">
                <center>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="number"
                            value={id}
                            disabled="disabled"
                        /><br /><br />
                        <input
                            type="text"
                            value={title}
                            onChange={e => titleChange(e.target.value)}
                        /><br /><br />
                        <input
                            type="number"
                            value={price}
                            onChange={e => priceChange(e.target.value)}
                        /><br /><br />
                        <input
                            type="number"
                            value={inventory}
                            onChange={e => inventoryChange(e.target.value)}
                        /><br /><br />
                        {!loading && <button>Send Data to Server</button>}
                        {loading && <button>Loading Data to Server</button>}
                    </form>
                </center>
            </section>
        </>
    )
}

export default EditMenu;
