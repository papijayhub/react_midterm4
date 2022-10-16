import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import useCustomFetch from './useCustomFetch';
import './Interface.css'
import ReactPaginate from 'react-paginate';

function MainBody() {
    const {id} = useParams();
    const {data: venues, isLoading, error} = useCustomFetch(`https://sis.materdeicollege.com/api/venues?_page=1&_limit=15`);
    const [certainid, setCertainid] = useState(null);
// console.log(venues)
    const handlePageClick = (dateta) => {
      console.log(dateta.selected)
    }

    // const getspecific = () => {
      useEffect(() => {
    
      // fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      fetch('https://sis.materdeicollege.com/api/venues/' + id)
      .then(res=>{
        return res.json()
      }).then((data) => {
        setCertainid(data)
        // console.log(certainid)
  })
    }, [])
    // }
  return (
    <div className='mains-row'>

      

<div className="mains-row-table">
      <table className="ssticky-table-headers">
    <thead>
        <tr className="ssticky-table-headers__sticky">
            <th>Id</th>
            <th>Name</th>
            <th>Building</th>
            <th>Capacity</th>
        </tr>
    </thead>
    <tbody>
        {/* {venues && <MainTables data={venues}/>} */}
   {venues && venues.map((vens) => (
                        <tr className="ssticky-table-headers__sticky" key={vens.id}> 
                        <td className='teddy'><Link to={`/${vens.id}`}>{vens.id}</Link></td>
                        <td className='teddy'><Link to={`/${vens.id}`}>{vens.name}</Link></td>
                        <td className='teddy'><Link to={`/${vens.id}`}>{vens.building}</Link></td>
                        <td className='teddy'><Link to={`/${vens.id}`}>{vens.capacity}</Link></td>
                        </tr>
                ))}
    </tbody>
    <tfoot>
    { error && <tr className='error'><td>{error}</td></tr> }
    { isLoading && <tr className="d"><td className='spinner'/></tr> }
    </tfoot>
    </table>
    </div>
    <div className="mains-row-paginate">
<ReactPaginate
previousLabel={'previous'}
nextLabel={'next'}
breakLabel={'...'}
pageCount={10}
marginPagesDisplayed={3}
pageRangeDisplayed={3}
onPageChange={handlePageClick}
containerClassName={'pagination justify-content-center'}
pageClassName={'page-item'}
pageLinkClassName={'page-link'}
previousClassName={'page-item'}
previousLinkClassName={'page-link'}
nextClassName={'page-item'}
nextLinkClassName={'page-link'}
breakClassName={'page-item'}
breakLinkClassName={'page-link'}
activeClassName={'active'}
/>
</div>
   </div>
   
  )
}

export default MainBody
