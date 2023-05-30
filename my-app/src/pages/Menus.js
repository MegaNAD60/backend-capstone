import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"


function Menus() {

  const [loading, setLoading] = useState([true])
  const [records, setRecords] = useState([])



  useEffect(() => {
    setLoading(true);
    fetch('http://127.0.0.1:8000/menu')
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error(error))
    setLoading(false);
  }, [])

  var menurecords = "";
  menurecords = records.map((item) => {
    const { id, title, price, inventory } = item;
    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{price}</td>
        <td>{inventory}</td>
        <td><button type='button'><Link to={`/MenuDetails/${id}`}>Details</Link></button></td>
      </tr>
    )
  })


  return (
    <>
      <div className="App">
        {loading ? 'loading...' : (
          <div className='grid'>
            <h1>Our Menu</h1>
            <button className='post-menu btn'>
              <Link to="/PostMenus">Add Menu</Link>
            </button>
            <center>
              <table>
                <thead>
                  <tr>
                    <th>TITLE</th>
                    <th>PRICE</th>
                    <th>INVENTORY</th>
                    <th>INVENTORY</th>
                  </tr>
                </thead>
                <tbody>
                  {menurecords}
                </tbody>
              </table>
            </center>
          </div>
        )}
      </div>
    </>
  );
}

export default Menus;
