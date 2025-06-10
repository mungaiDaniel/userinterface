import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { orange } from '@mui/material/colors';
import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useEffect } from 'react' 
const useStyles = makeStyles((theme) => ({
 
    title: {
      flexGrow: 1,
    },
    AppBar: {
      // backgroundColor: "#fff",
    },
    badge: {
      border: `2px solid ${theme.palette.background.paper}`,
    },
    links: {
      textDecoration: "none",
    },
  }));

const theme = createTheme({
    typography:{
      h3:{
        fontSize: 56,
      }
    },
    palette:{
      primary:{
        main: orange[500],
      }
    }
  })

const NavBar = ({ }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const token = ''
    const logout = () =>{
      window.localStorage.removeItem('access_token')
      window.localStorage.removeItem('user_role')
      navigate('/login')
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
    <AppBar className='navbar navbar-expand-lg bg-warning navbar-dark py-0 mb-1'>
        <Container>
        <Typography>
        <Link to="/" className='navbar-brand text-dark'>Salon Gerente</Link>
        </Typography>
    <Toolbar>
      <IconButton 
        edge='start'
        aria-label='menu'
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
        className='navbar-toggler'
        style={{
          color: 'black'
        }}
      >
        <MenuIcon/>
      </IconButton>
        
        <Typography >
        <div className="collapse navbar-collapse mx-5" id="navmenu">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link text-dark">About</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link text-dark">Services</a>
            </li>
            <li className="nav-item">
              <a href="#stylist" className="nav-link text-dark">Stylist</a>
            </li>
            <li className="nav-item">
              <a href="#location" className="nav-link text-dark">Location</a>
            </li>
            <li className="nav-item">
            <a href="#" onClick={handleClick} className="nav-link text-dark">View More</a>
            </li>
          </ul>
        </div>
        </Typography>


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
              (<Link to="/login" className={classes.links}>
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
