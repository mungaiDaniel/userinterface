import './styles/Services.scss';
import { useState } from 'react';
import data from '../data';
import Modal from './Modal';




const Services = () => {

  const [openModal, setOpenModal] = useState(false);
  const [tempdata, setTempdata] = useState([])

  const getData = (cost, description, duration, imgSrc1, imgSrc, style) =>{
    setTempdata(item => [cost, description, duration, imgSrc1, imgSrc, style])
    return setOpenModal(true)
  }



  return (
    <>
    <div id='services'>
       <div className="container">
          <div className="row">
           <div className="col-12 text-center">
            <h2 className="section-services">Our Services</h2>
            <p className='text-success shadow p-3 mb-5 bg-white rounded'>Click services below for full description and pricing</p>
           </div> 
          </div>
        </div>
        <div className="grid-services">

          {
            data.serviceData.map((item, index)=>{
              return(
                <div className="img-container" key={index} onClick={() => getData(item.cost, item.description,item.duration,item.imgSrc1 ,item.imgSrc, item.style)}>
                      <img className='pedicure' src= {item.imgSrc} style={{border: 'none', padding: '0px', filter:'brightness(30) invert(1)'}}alt="Cut"></img>
                      <div style={{paddingTop: '24px',paddingLeft: '5px', fontSize: '17px'}}>{item.style}</div>
                     </div>
              )
            })
          }
      

    </div>
    </div>
    {
      openModal === true ? <Modal cost={tempdata[0]} description={tempdata[1]} style={tempdata[5]} duration={tempdata[2]} imgSrc1={tempdata[3]} hide={() => setOpenModal(false)} /> : ''
    }
    </>
  )
}

export default Services
