import salon2 from '../Img/salon2.jpg'
import { Link } from "react-router-dom";
import { Box  } from "@mui/material";


const Logo = () => {
  return (
    <Box>
    <Link to="/">
      <Box className='img-fluid w-50 d-none d-sm-block' component="img" src={salon2} alt="logo" />
    </Link>
  </Box>
  )
}

export default Logo
