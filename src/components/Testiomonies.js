import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './styles/Testiominies.scss';
import { Link } from "react-router-dom";


const Testimonies = () => {

  return (
    <div className='container p-5' style={{ minHeight: '60vh' }}>
        <div className="text-center mb-5">
            <h1 className='testimonials text-danger mb-4' style={{ fontSize: '3rem', fontWeight: 'bold' }}>TESTIMONIALS</h1>
            <p className='details lead' style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            These reviews that our clients have recently submitted are the best way to learn more about our barbershops level of service and customer support. 
            </p>
        </div>
        <div className="text-center mb-4">
          <Link to="/testimony">
            <button type="button" className="btn btn-success btn-lg" data-toggle="tooltip" data-placement="right" title="Add your testimony">
              Add a Testimony
            </button>
          </Link>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Slide>
              <div>
                <div className="card bg-light border-0 shadow-sm mb-4">
                  <div className="card-body text-center p-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/11.jpg"
                      className="rounded-circle mb-3"
                      alt="Customer"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <h3 className="card-title mb-3">Sarah Johnson</h3>
                    <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic' }}>
                      "Excellent service! The stylists are professional and really listen to what you want. I always leave feeling amazing!"
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card bg-light border-0 shadow-sm mb-4">
                  <div className="card-body text-center p-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/17.jpg"
                      className="rounded-circle mb-3"
                      alt="Customer"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <h3 className="card-title mb-3">Michael Chen</h3>
                    <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic' }}>
                      "Best salon in Nairobi! The attention to detail and customer care is outstanding. Highly recommend!"
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card bg-light border-0 shadow-sm mb-4">
                  <div className="card-body text-center p-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/21.jpg"
                      className="rounded-circle mb-3"
                      alt="Customer"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <h3 className="card-title mb-3">Emily Williams</h3>
                    <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic' }}>
                      "I've been coming here for years. The team is amazing and they always make me feel special. Love it!"
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
    </div>

  )
}

export default Testimonies
