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
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://trina-overmild-cristobal.ngrok-free.dev/api/v1/stylings");
        setServices(response.data);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div>Loading services...</div>;
  if (error) return <div className="text-danger">{error}</div>;

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