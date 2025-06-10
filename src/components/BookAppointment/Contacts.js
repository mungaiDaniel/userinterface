import React, { useEffect, useState } from "react";
import { withStyles, TextField, Grid } from "@material-ui/core";
import axios from "axios";
const style = theme => {
  return {
    root: {
      padding: theme.spacing(3),
      height: "100%",
      maxWidth: 450,
      margin: "0 auto"
    },
    icon: {
      fill: theme.palette.grey[500]
    }
  };
};

const Contacts = ({ classes, employee_id, service_id, date, employee, service}) => {
  // const [bookings, setBookings] = useState([])

  // useEffect(() =>{
  //   axios.get("http://127.0.0.1:5000/booking")
  //   .then((res) => {
  //     setBookings(res.data)
  //   })
  // }, [])

  return (
    <Grid
      container
      style={{justifyContent:"center"}}
      alignItems="center"
      className={classes.root}
    >
       
       <ul class="list-group list-group w-100">
  <li class="list-group-item list-group-item-primary d-flex"><h4 className="mx-4" >Assisstance:</h4>{employee.firstName}</li>
  <li class="list-group-item list-group-item-primary d-flex"><h4 className="mx-4" >Service:</h4>{service.style} </li>
  <li class="list-group-item list-group-item-primary d-flex"><h4 className="mx-4" >Date:</h4>{date}</li>
  
        </ul>
    
      
    
    </Grid>
  );
};

export default withStyles(style)(Contacts);
