import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Itry() {
    const [venue, setVenue] = useState(null);
    const {id} = useParams();
    // const [id, setId] = useState(0);
    const [certain, setCertain] = useState(null)

  useEffect(() => { 
    fetch('https://sis.materdeicollege.com/api/venues')
    .then(res => {
      return res.json();
    }).then(data=>{
      setVenue(data.venues)
    })
  }, [])

    const getspecific = () => {
      fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then(res=>{
        return res.json()
      }).then((data) => {
        setCertain(data)
      })
    }

  return (
    <div>
      <div className="card bg-success">
         <h1>rap</h1>
         <table>
          <thead>
            <tr>
            <th>name</th>
            <th>building</th>
            </tr>
          </thead>
          <tbody>
            {venue && venue.map((venuef) => (
            <tr>
           <td>
           {venuef.name}
          </td>
          <td>
           {venuef.building}
          </td>
          <td><button onClick={() =>{getspecific(venuef.id)}}>-o-</button></td>
            </tr>
        ))}
           
          </tbody>
         </table>
        
      </div>
        <h2>yow</h2>
          {/* {certain && certain.map((cert)=> (
            <div className="">
              {cert.venue.name}
            </div>
          ))} */}
          {certain && (
            <div className="">
              {certain.venue.name}
            </div>
          )}
    </div>
  )
}

export default Itry