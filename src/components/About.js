import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ minHeight: '80vh', padding: '3rem 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4 mb-4" style={{ color: '#ffc107', fontWeight: 'bold' }}>
              About Salon Gerente
            </h1>
            <p className="lead">
              Where Beauty Meets Design
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-primary mb-3">Our Mission</h3>
                <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  Our mission is to provide our clients with results based on our clients' needs and the advice of our professional hair stylists. 
                  Thank you to all of our clients who continue to support us and in making us one of the leading Hair Salons in Kenya.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-info mb-3">Our Vision</h3>
                <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  At Salon Gerente Hair & Beauty, we aim to provide a friendly, personalized service through a team of highly skilled and creative professionals. 
                  Teamwork is our most valuable asset which ensures our clients are always number one, and we strive to exceed your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-warning mb-4">We Care About Your Hair</h3>
                <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  We strive to reach beyond the roots (of hair), and into the refinement and healing of one's core self.
                </p>
                <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  Whether you want to get a simple, classic hair cut or you want to get a personalized look from the stylists, 
                  SALON GERENTE is for you. We offer a range of services starting from hair styling, hair coloring, makeup, 
                  eyelash extensions to skincare, bronzing, hair removal and barbering.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <div className="card shadow-sm bg-light">
              <div className="card-body">
                <h3 className="card-title text-success mb-4">Feel Good About Yourself</h3>
                <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  We believe people go to salons to look a certain way. People go to SALON GERENTE to feel a certain way.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <Link to="/home" className="btn btn-warning btn-lg me-3">
              Back to Home
            </Link>
            <Link to="/book" className="btn btn-success btn-lg">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

