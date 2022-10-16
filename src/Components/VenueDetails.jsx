import { useLocation, useNavigate, useParams } from "react-router-dom";
import useCustomFetch from "./useCustomFetch";
import './VenueDetails.css'

const VenueDetails = () => {
    const {id} = useParams();
    const {isLoading, error, certainId} = useCustomFetch('https://sis.materdeicollege.com/api/venues/' + id );
// console.log(certainId)
    const location = useLocation();
    // console.log(location.pathname);
    if(location.pathname != '/'){
    return (
        <div className="venue-details">
            <h2>Venue Details - {id} </h2>
            {/* <h2>{location.pathname}</h2> */}
            {isLoading && <div>...Loading</div>}
            {error && <div>{error}</div>}

            {certainId && (
                <div className="">
                    <table className="right-table">
                        <thead>
                            <tr className="right-head">
                                <th>name</th>
                                <th>building</th>
                                <th>capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{certainId.venue.name}</td>
                                <td>{certainId.venue.building}</td>
                                <td>{certainId.venue.capacity}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
<br />

           {certainId && certainId.schedules.map((sched) => (
            <div className="stream" key={sched.id}>
            <div className="post">
              <div className="postUser">
                <div className="postUser__portrait">
                  <img className="userimage" src="https://picsum.photos/200/100" alt="" />
                </div>
                <div className="postUser__name">{sched.teacher}
                <br />{sched.course_no}
                </div>
              </div>
              <div className="postBody">
                <div className="postBody__content">
                {sched.description}
                </div>
                <div className="postBody__date">
                {sched.schedule}
                </div>
              </div>
            </div>
            </div>
            
           ))}
                
        </div>


      );
     }else{
        return(
            <h2>uwu</h2>
        );
      }
}
 
export default VenueDetails;