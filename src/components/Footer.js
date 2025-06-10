import 'font-awesome/css/font-awesome.min.css';
import './styles/Footer.scss';

const Footer = () => {
  return (
    <footer
    className="footer  page-footer font-small p-5 bg-dark text-white text-center position-relative  p-lg-0 pt-lg-5"
    style={{ backgroundColor: "#D6CFD0",
            marginTop: '13rem'          
  }}
  >
    <div style={{ backgroundColor: "#37474F" }}>
      <div className="container">
        <div className="row py-4 d-flex align-items-center">
          <div
            className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0"
            style={{ color: "#fff" }}
          >
            <h6 className="mb-0" style={{ fontSize: ".90rem" }}>
              Get connected with us on social networks!
            </h6>
          </div>
          <div
            className="col-md-6 col-lg-7 text-center text-md-right align-items-center justify-content-between"
            style={{ color: "#fff" }}
          >
            <a className="gh-ic m-2" href="https://github.com/mungaiDaniel"
                target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github white-text mr-4"> </i>
            </a>

            <a className="li-ic m-2" href="www.linkedin.com/in/daniel-mungai-7a52451b8"
                target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin white-text mr-4"> </i>
            </a>

            <a className="gplus-ic m-2"  href="https://plus.google.com/u/0/102825695436822534554"
                target="_blank" rel="noopener noreferrer">
              <i className="fa fa-google white-text mr-4"> </i>
            </a>

            <a className="tw-ic m-2"  href="https://twitter.com/monga_danito"
                target="_blank"rel="noopener noreferrer">
              <i className="fa fa-twitter white-text mr-4"> </i>
            </a>

            <a className="ins-ic m-2"   href="https://www.instagram.com/call_me_mongah/"
                target="_blank"rel="noopener noreferrer">
              <i className="fa fa-instagram white-text"> </i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      className="container text-center text-md-left mt-5"
      style={{ color: "#fff" }}
    >
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6
            className="text-uppercase font-weight-bold"
            style={{ fontSize: ".90rem" }}
          >
           Salon Gerente
          </h6>
          <hr
            className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style={{ width: "60px", backgroundColor: '#37474F'}}
          />
          <p style={{fontSize: '.85rem'}}>
            Our mission is to provide our clients with results based on our clients needs and the advice of our professional hair stylist. Thank you to all of our clients who continue to support us and in making us one of the leading Hair Salons in the Austin Area.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6
            className="text-uppercase font-weight-bold"
            style={{ fontSize: ".90rem" }}
          >
            Products
          </h6>
          <hr
            className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style={{ width: "60px" , backgroundColor: '#37474F'}}
          />
          <p style={{ fontSize: ".75rem" }}>
            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap 4</a>
          </p>
          
          <p style={{ fontSize: ".75rem" }}>
            <a href="https://reactjs.org/" target="_blank"rel="noopener noreferrer">React JS</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6
            className="text-uppercase font-weight-bold"
            style={{ fontSize: ".90rem" }}
          >
            Useful links
          </h6>
          <hr
            className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style={{ width: "60px" ,  backgroundColor: '#37474F'}}
          />
          <p style={{ fontSize: ".75rem" }}>
            <a href="#!">About Us</a>
          </p>
          <p style={{ fontSize: ".75rem" }}>
            <a href="#!">Your Account</a>
          </p>
          <p style={{ fontSize: ".75rem" }}>
            <a href="#!">Awards</a>
          </p>
          <p style={{ fontSize: ".75rem" }}>
            <a href="#!">Help</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6
            className="text-uppercase font-weight-bold"
            style={{ fontSize: ".90rem" }}
          >
            Contact
          </h6>
          <hr
            className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style={{ width: "60px" ,  backgroundColor: '#37474F'}}
          />
          <p style={{ fontSize: ".75rem" }}>
            <i className="fa fa-home mr-3" />Nairobi - Waiyaki Way
          </p>
          <p style={{ fontSize: ".75rem" }}>
            <i className="fa fa-envelope mr-3" /> Danitomonga@gmail.com
          </p>
          <p style={{ fontSize: ".75rem" }}>
            <i className="fa fa-phone mr-3" />
             <a href="tel:254-727980611" >
                +254-727980611
              </a>
          </p>
        </div>
      </div>
    </div>

    <div
      className="footer-copyright text-center py-3"
      style={{
        fontSize: ".75rem",
        color: "#fff",
        backgroundColor: "#212121" 
      }}
    >
      <h5>© 2023 Copyright : Salon Gerente</h5>
    </div>
  </footer>
  );
}

export default Footer

