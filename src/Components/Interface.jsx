import {  useNavigate } from 'react-router-dom';
import './Interface.css'
import MainBody from './MainBody';
import useCustomFetch from './useCustomFetch';
import VenueDetails from './VenueDetails';

function Interface() {
    const navigate = useNavigate();
    const navigateToVenuedetails = () => {
      navigate('/layout');
    };
   
  return (
    <div>

  <div className="parent">
    <header className="pink section" onClick={navigateToVenuedetails}>MDC Venues</header>
    <div className="left-side blue section">
        <section className='left-side-row'>
            <div className='xleft-side-logo-child'>
        <img src="/src/assets/logomdc.jpg" className="left-image" alt="" />
            </div>
            <div className='xleft-side-text1-child'>Mater Dei College</div>
            <div className='xleft-side-text2-child'>Cabulijan, Tubigon, Bohol</div>
        </section>
    </div>
    
    <main className="section coral">
    <MainBody/>
    </main>

    <div className="right-side yellow section">
        <section className='right-side-row'>
          <div className="right-side-col">
        <VenueDetails/>
          </div>
        </section>
       
    </div>
    <footer className="green section"><h4>@jay calamba</h4></footer>
  </div>
  
    </div>
  )
}

export default Interface