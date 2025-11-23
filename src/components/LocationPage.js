import React from 'react';
import Location from './Location';
import { Link } from 'react-router-dom';

const LocationPage = () => {
  return (
    <div style={{ minHeight: '80vh', paddingTop: '2rem' }}>
      <div className="container mb-4">
        <div className="row">
          <div className="col-12 text-center mb-3">
            <Link to="/home" className="btn btn-outline-warning">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Location />
    </div>
  );
};

export default LocationPage;

