import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles, FormControlLabel, Grid, Switch } from "@material-ui/core";
import axios from "axios";

const style = theme => ({
  root: {
    padding: 8,
    height: "100%",
    alignItems: "center",
    maxWidth: 400,
    margin: " 0 auto"
  },
  row: { borderBottom: `1px solid ${theme.palette.grey[100]}` },
  icon: {
    fill: theme.palette.grey[700],
    width: 28,
    height: 28
  }
});
const SelectService = ({ classes, setService_id, setService }) => {

  const [services, setServices] = useState([])
  const getInitialState = () => {
      return services.reduce((obj, item) => {
      obj[item.id] = false;
      return obj;
    }, {});
};
  const [serviceSelected, setServiceSelected] = useState(getInitialState());
  const handleChange = (id, service) => e => {
    setServiceSelected({ ...serviceSelected, [id]: e.target.checked });
    setService_id(e.target.value)
    setService(service)
  }
   

  const textSelected = Object.keys(serviceSelected)
    .filter(key => serviceSelected[key])
    .join(", ");

  useEffect(() => {
    axios.get("https://appointment-0nu1.onrender.com/api/v1/stylings")
    .then((response) => {
      setServices(response.data)
    })
  }, [])

  return (
    <Grid
      container
      className={classes.root}
      style={{justifyContent:"center", fontSize: '0.8rem'}}
      alignItems="center"
      spacing={0}
      
    >
      {services.map((service, i) => (
        <Grid
          item
          key={service.id}
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.row}
        >
          <svg
            className={classes.icon}
            xmlns="http://www.w3.org/2000/svg"
          >
            {service.iconPath}
          </svg>
          <FormControlLabel
            control={
              <Switch
                onChange={handleChange(service.id, service)}
                value={service.id}
                color="primary"
              />
            }
            label={service.style}
            checked={serviceSelected[service.id]}
            labelPlacement="start"
          />
        </Grid>
      ))}
      <input
        type="text"
        value={textSelected}
        name="selected services"
        style={{ width: 1, height: 1, opacity: 0.1 }}
        readOnly
      />
    </Grid>
  );
};

SelectService.propTypes = {
  classes: PropTypes.object
};
export default withStyles(style)(SelectService);