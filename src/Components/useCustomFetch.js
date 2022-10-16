import {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom';

const useCustomFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [certainId, setCertainId] = useState(null);
    // const {id} = useParams();

    useEffect(() => {
        setTimeout(() => {
 
         fetch(url)
        .then(res => {
         if(!res.ok){
             throw Error('Could not fetch for that resource')
         }
         return res.json()
        })
        .then((venuesData) => {
            // const {venues} = venuesData;
            setData(venuesData.venues);
            setCertainId(venuesData);
            // console.log(certainId)
            //    console.log(venues);
            setIsLoading(false);
            // setSingleVenue(venuesa.schedules)
            setError(null);
        })
        .catch(err => {
         setError(err.message);
         setIsLoading(false);
        });
 
        }, 1000);
     }, [url])

    //  const getCertainId = () =>{
    //     fetch('https://sis.materdeicollege.com/api/venues/' + id)
    //     .then(res => {
    //         return res.json();
    //     }).then(data=>{
    //         setCertainId(data)
    //     })
    //  }

     return {data, isLoading, error, certainId};
}

export default useCustomFetch;