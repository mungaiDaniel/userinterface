import salon2 from './Img/salon2.jpg'
import {Image} from "react-bootstrap";

const Pict = () => {
  return (
    <div>
      <Image src={salon2} thumbnail style={{border:'none'}} className="img-fluid w-50 d-none d-sm-block" />
    </div>
  )
}

export default Pict
