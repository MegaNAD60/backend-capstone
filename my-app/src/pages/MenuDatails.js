import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"



const MenuDetails = () => {

    const [menu, setMenu] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getMenu();
    });

    const getMenu = () => {
        fetch(`http://localhost:8000/menu/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setMenu(data);
            })
            .catch(error => console.error(error))
    };

    return (
        <>
            <center>
                <div className=''>
                    <h4>{menu.title}</h4>
                    <p>{menu.price}</p>
                    <p>{menu.inventory}</p>
                </div>
            </center>

            <span className='menu-details-btns'>
                <button className='edit btn'>
                    <Link to="/EditMenu">Edit Menu</Link>
                </button>
                <button className='delete btn'>
                    <Link to="#">Delete Menu</Link>
                </button>
            </span>

        </>
    )
}

export default MenuDetails