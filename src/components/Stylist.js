import './styles/Stylist.scss';

const Stylist = () => {
  return (
    <div className="container-fliud styles bg-dark " id="stylist">
      <h2 class="text-center text-white">Our Stylists</h2>
        <p class="lead text-center text-white mb-5">
          Our Stylists all have 5+ years working as Hair Stylists in the
          industry
        </p>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  class="rounded-circle mb-3"
                  alt=""
                />
                <h3 class="card-title mb-3">John Doe</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i class="bi bi-twitter text-primary mx-1"></i></a>
                <a href="#"><i class="bi bi-facebook text-primary mx-1"></i></a>
                <a href="#"><i class="bi bi-linkedin text-primary mx-1"></i></a>
                <a href="#"><i class="bi bi-instagram text-primary mx-1"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  class="rounded-circle mb-3"
                  alt=""
                />
                <h3 class="card-title mb-3">Jane Barathion</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i class="bi bi-twitter text-primary mx-1"></i></a>
                <a href="#"><i class="bi bi-facebook text-primary mx-1"></i></a>
                <a href="#"><i class="bi bi-linkedin text-primary mx-1"></i></a>
                <a href="#"><i class="bi bi-instagram text-primary mx-1"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  class="rounded-circle mb-3"
                  alt=""
                />
                <h3 class="card-title mb-3">Steve Smith</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i class="bi bi-twitter text-primary mx-1"></i></a>
                <a href="#"><i class="bi bi-facebook text-primary mx-1"></i></a>
                <a href="#"><i class="bi bi-linkedin text-primary mx-1"></i></a>
                <a href="#"><i class="bi bi-instagram text-primary mx-1"></i></a>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  class="rounded-circle mb-3"
                  alt=""
                />
                <h3 class="card-title mb-3">Sara Kim</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                </p>
                <a href="#"><i class="bi bi-twitter text-primary mx-1"></i></a>
                <a href="#"><i class="bi bi-facebook text-primary mx-1"></i></a>
                <a href="#"><i class="bi bi-linkedin text-primary mx-1"></i></a>
                <a href="#"><i class="bi bi-instagram text-primary mx-1"></i></a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Stylist
