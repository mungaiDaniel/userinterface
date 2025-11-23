import { Container } from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem"; 
const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    links: {
      textDecoration: "none",
    },
  }));

const NavBar = ({ }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const token = ''
    const logout = () =>{
      window.localStorage.removeItem('access_token')
      window.localStorage.removeItem('user_role')
      handleClose()
      navigate('/')
    }


  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className={classes.root}>
    <AppBar className='navbar navbar-expand-lg bg-warning navbar-dark py-0 mb-1' position="static">
        <Container>
    <Toolbar style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0' }}>
        <Typography className={classes.title}>
        <Link to="/home" className='navbar-brand text-dark' style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>Salon Gerente</Link>
        </Typography>
      <IconButton 
        edge='start'
        aria-label='menu'
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
        className='navbar-toggler d-lg-none'
        style={{
          color: 'black'
        }}
      >
        <MenuIcon/>
      </IconButton>
        
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto" style={{ display: 'flex', alignItems: 'center', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark" style={{ textDecoration: 'none', cursor: 'pointer' }}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/services-page" className="nav-link text-dark" style={{ textDecoration: 'none', cursor: 'pointer' }}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/stylist" className="nav-link text-dark" style={{ textDecoration: 'none', cursor: 'pointer' }}>Stylist</Link>
            </li>
            <li className="nav-item">
              <Link to="/location" className="nav-link text-dark" style={{ textDecoration: 'none', cursor: 'pointer' }}>Location</Link>
            </li>
            <li className="nav-item">
            <a href="#" onClick={handleClick} className="nav-link text-dark" style={{ textDecoration: 'none', cursor: 'pointer' }}>View More</a>
            </li>
          </ul>
        </div>


        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            autoFocus
            className='m-2'
          >
            {
              window.localStorage.getItem('access_token') ? 
              (<MenuItem onClick={logout}>Logout</MenuItem>) 
              :
              (<Link to="/" className={classes.links}>
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Link>)
            }
           
           {
            window.localStorage.getItem('access_token') ? (<Link to="/testimony" className={classes.links}>
            <MenuItem onClick={handleClose}>Testimonies</MenuItem>
          </Link>) : (<Link to="/register" className={classes.links}>
              <MenuItem onClick={handleClose}>Register</MenuItem>
            </Link>)
           }

           {
            window.localStorage.getItem('user_role')  && (<Link to="/admin" className={classes.links}>
            <MenuItem onClick={handleClose}>Admin</MenuItem>
          </Link>)
           }
             
            
            
          </Menu>
         
     
    </Toolbar>
    </Container>
  </AppBar>
</div>
  )
}

export default NavBar
