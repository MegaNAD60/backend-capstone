import Nav from '../components/Nav';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"


function Menus() {

    const [loading, setLoading] = useState([true])
    const [records, setRecords] = useState([])

    const params = useParams();
    console.log(params)



    useEffect(() => {
      setLoading(true);
      fetch('http://127.0.0.1:8000/menu/<int:pk>')
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error(error))
      setLoading(false);
    }, [])

    var menurecords = "";
    menurecords = records.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.inventory}</td>
          <td><button type='button'><Link to={`/Menus/${item.menuId}`}>Edit</Link></button></td>
        </tr>
      )
    })


      return (
       <>
       <Nav />
        <div className="App">
          {loading ? 'loading...' : (
            <div className='grid'>
              <h1>Our Menu</h1>
              <center>
                    {menurecords}
              </center>
            </div>
          )}
        </div>
       </>
    );
  }

  export default Menus;
