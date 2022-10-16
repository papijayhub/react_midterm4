import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Fetch() {
    const {id} = useParams();
    const [venue, setVenue] = useState({});
    const [schedule, setSchedule] = useState({});
    const [loadinga, setIsLoadinga] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      setTimeout(() => {

         // setIsLoadinga(true);
         fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
         .then((res) => 
        //  {
        //   if(!res.ok){
        //     throw Error('Could not fetch for that resource')
        // }
        res.json()
        //  }
         )
         .then((data) => {
             const {venue} = data;
 // console.log(venue)
             setIsLoadinga(false);
             // setVenue(data.venue); 
             setVenue(venue); 
             setSchedule(data.schedules);
             setError(null);
             // console.log(data.schedules)
             // console.log(schedule)
         })
         .catch((error) => {
             setIsLoadinga(false);
             setError(error.message);
         })

      }, 1000)
       
    },[])
// console.log(schedule);
  return (
    <>
    <div><h2>Venue Details - {id}</h2>
   {loadinga && <div>...Loading</div>}
   {error && <div>{error}</div>}
        {venue.building}
       <br />
       {venue.id}
       <br />
       {venue.name}
       <br />
       
    </div>
    <div className="tbody">
      {/* {schedule.map((schedu) => (
        <div key={schedu.id}>
          {schedu.teacher}
        </div>
      ))} */}
    {schedule && Object.keys(schedule)?.map((sched, index) => {
             return (
                
                  <div key={index}>
                    <div>{schedule[sched].id}</div>
                    <div>{schedule[sched].course_no}</div>
                    <div>{schedule[sched].description}</div>
                    <div>{schedule[sched].schedule}</div>
                    <div>{schedule[sched].size}</div>
                    <div>{schedule[sched].teacher}</div>
                  </div>
                
              );
            })}
      </div>
      </>
  )
}

export default Fetch