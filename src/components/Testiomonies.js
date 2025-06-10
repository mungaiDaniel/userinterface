import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './styles/Testiominies.scss';
import { Link } from "react-router-dom";


const Testimonies = () => {

  return (
    <div className='container p-3'>
        <div>
            <h1 className='testimonials text-danger'>TESTIOMONIALS</h1>
            <p className='details'>
            These reviews that our clients have recently submitted are the best way to learn more about our barbershops level of service and customer support. 
            </p>
        </div>
        <Link to="/testimony">
            <button type="button" class="btn btn-success mt-3" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
  Add a Testimony
</button>
</Link>

            <Slide>
    <div>
    <div className="card bg-light border-0">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">John Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
            </div>
        </div>
    </div>
    <div>
    <div className="card bg-light border-0">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/17.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">John Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
            </div>
        </div>
    </div>
    <div>
    <div className="card bg-light border-0">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/21.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">John Doe</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
            </div>
        </div>
    </div>
</Slide>
    </div>

  )
}

export default Testimonies
