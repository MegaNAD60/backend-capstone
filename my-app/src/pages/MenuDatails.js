import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom"



const MenuDetails = () => {

    const [menu, setMenu] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getMenu();
    });

    const getMenu = () => {
        fetch(`http://127.0.0.1:8000/menu/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setMenu(data);
        })
        .catch(error => console.error(error))
    };

    const deleteMenu = () => {
        if(window.confirm('Do you want to Delete?'))
        fetch(`http://127.0.0.1:8000/menu/${id}`,
        {method: "DELETE"}).then(() => {
            alert("Delete successful!")
            navigate("/Menus")
        })
        .catch((err) => console.error(err))
        }


    return (
        <>
            <center>
                <div className=''>
                    <h4>{menu.title}</h4>
                    <p>{menu.price}</p>
                    <p>{menu.inventory}</p>
                </div>
            </center>

            <div className='menu-details-btns'>
                <button className='edit btn'>
                    <Link to={`/EditMenu/${id}`}>Edit Menu</Link>
                </button>
                <button className='delete btn' onClick={()=>{deleteMenu(menu.id)}}>
                    Delete Menu
                </button>
            </div>

        </>
    )
}

export default MenuDetails;