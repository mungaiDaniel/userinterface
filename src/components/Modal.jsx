import React from 'react'

const Modal = ({ cost, description, duration, style, imgSrc1, hide }) => {

    let modelStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
        outerWidth: '100%',
    }

  return (
    <div className="modal show fade mt-5" style={modelStyle} >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{style}</h5>
          <button type="button" className="btn-close" onClick={hide}>
          </button>
        </div>
        <div className="modal-body">
          <img src={imgSrc1}  alt='image'  className='img-fluid'/>
          <br/>
          <p>{description}</p>
          <p>cost: {cost} Ksh</p>
          <p>Duration: {duration} hours</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal