import React, { useState } from "react";
import { DatePicker, KeyboardDatePicker ,MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Typography} from '@material-ui/core';
import {
  withStyles,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField
} from "@material-ui/core";



const styles = theme => {
  return {
    root: {
      padding: theme.spacing(3),
      height: "100%",
      maxWidth: 450,
      margin: " 0 auto"
    },
    icon: {
      height: 28,
      width: 28,
      fill: theme.palette.grey[500]
    }
  };
};
function SelectDateDaypart({ classes , setDate, date, time, setTime, setService }) {

  return (
    <Grid
      container
      style={{justifyContent:"center", fontSize: '0.8rem'}}
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={classes.icon}
        >
        </svg>
      </Grid>
      <Grid item xs={10}>
      <Typography variant="h5" color="primary" style={{marginRight: "370px", marginBottom:"20px"}}>
          Date
        </Typography>
          <div className={classes.picker} style={{marginBottom: '20px', fontSize: '0.8rem'}}>
          <div className="form-input">
                    <input className = "form-input__text form-control" type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
          </div>
      
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SelectDateDaypart);