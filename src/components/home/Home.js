
import { useNavigate  } from "react-router-dom";
import { Alert, AlertTitle } from '@mui/material';
import { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';

const Home = () => {

  const [error, setError] = useState('')
  const navigate = useNavigate()
  const token = '';

  const book = () => {
    if (window.localStorage.getItem('access_token')){
      navigate('/book');
    } else {
        setError('please register or login first')
        setTimeout(() => {
          setError('')
        }, 5000);
        

    }
  }
  
  
  
  
  return (
    <div className='home'>

{error && <Alert severity="error">
  <AlertTitle>error</AlertTitle>
   { error } — <strong>check out login page!</strong>
 </Alert>}
    <Slide>
      <div>
      <div className="containe testcase2" id='about'>
          
          <div className="container first" >
          <h3 className='title text-danger' >SALON GERENTE <span class="text-warning"> WHERE BEAUTY MEETS DESIGN </span></h3>
            <p className='home_body' style={{fontSize: '1rem',
         color: 'white'
      }}>Our mission is to provide our clients with results based on our clients needs and the advice of our professional hair stylist. Thank you to all of our clients who continue to support us and in making us one of the leading Hair Salons Kenya</p>
             <button type="button" className="btn btn-success mt-3" data-toggle="tooltip" data-placement="right" onClick={book} title="Book appointment">
   Book Your Appointment Now
 </button>

        </div>

        </div>
      </div>
      <div>
      <div className="containe testcase3" id='about'>
          
          <div className="container  first" >
          <h3 className='title text-info' >SALON GERENTE <span class="text-dying"> THE LOOK YOU WANT FOR LESS </span></h3>
            <p className='home_body' style={{fontSize: '1rem',
         color: 'black'
      }}>At Salon Gerente Hair & Beauty is to provide a friendly, personalized service through a team of highly skilled and creative professionals. Teamwork is our most valuable asset which ensures our clients are always number one, and we strive to exceed your expectations</p>
             <button type="button" className="btn btn-success mt-3" data-toggle="tooltip" data-placement="right" onClick={book} title="Book appointment">
   Book Your Appointment Now
 </button>

        </div>

        </div>
      </div>
      <div>
      <div className="containe testcase4" id='about'>
          
          <div className="container  first" >
          <h3 className='text-primary title' >SALON GERENTE <span class="text-dry"> BE WHO YOU WANT </span></h3>
            <p className='home_body' style={{fontSize: '1rem',
         color: 'black'
      }}>Whether you want to get a simple, classic hair cut or you want to get a personalized look from the stylists, SALON GERENTE is for you. They offer a range of services starting from hair styling, hair coloring, makeup, eyelash extensions to skincare, bronzing, hair removal and barbering.</p>
             <button type="button" className="btn btn-success mt-3" data-toggle="tooltip" data-placement="right" onClick={book} title="Book appointment">
   Book Your Appointment Now
 </button>

        </div>

        </div>
      </div>
      <div>
      <div className="containe testcase" id='about'>
          
          <div className="container  first" >
          <h3 className='title text-warning' >SALON GERENTE <span class="text-info"> WE CARE ABOUT YOUR HAIR </span></h3>
            <p className='home_body' style={{fontSize: '1rem'
      }}>We strive to reach beyond the roots (of hair), and into the refinement and healing of one’s core self. </p>
             <button type="button" className="btn btn-success mt-3" data-toggle="tooltip" data-placement="right" onClick={book} title="Book appointment">
   Book Your Appointment Now
 </button>

        </div>

        </div>
      </div>
      <div>
      <div className="containe testcase1" id='about'>
          
          <div className="container  first" >
          <h3 className='title text-muted'>SALON GERENTE <span class="text-dark"> FEEL GOOD ABOUT YOURSELF </span></h3>
            <p className='home_body' style={{fontSize: '1rem',
         color: 'mustard'
      }}>We believe people go to salons to look a certain way. People go to SALON GERENTE to feel a certain way.</p>


             <button type="button" class="btn btn-success mt-3" data-toggle="tooltip" data-placement="right" onClick={book} title="Book appointment">
   Book Your Appointment Now
 </button>

        </div>

        </div>
      </div>
    </Slide>
    </div>
  )
}

export default Home