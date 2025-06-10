import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  Paper,
  Grid,
  Typography,
  withStyles,
  Button,
} from "@material-ui/core";
import BookHeader from "../BookAppointment/BookHeader";
import NewBookings from "./NewBookings";
import Pendings from "./Pendings";
import Accepted from "./Accepted";
import Postponed from "./Postponed";
import './paper.scss';
const style = theme => ({
    root: {
      border: `8px solid ${theme.palette.common.white}`,
      margin: 36,
      padding: "36px 0 0",
      width: '700px',
      background: `rgba(255,255,255,0.9)`,
      boxShadow: `1px -1px 1px ${
        theme.palette.primary.light
      },1px -1px 1px 1px rgba(255,255,255,0.6),1px 2px 25px 2px rgba(0,0,0,0.6)
      } `
    },
    navigation: {
      boxShadow: theme.shadows[10],
      width: 110,
      fontSize: 12,
      [theme.breakpoints.down("xs")]: {
        fontSize: 10,
        width: 90
      }
    },
    prevBtn: {
      color: theme.palette.grey[700],
      background: theme.palette.common.white,
      boxShadow: theme.shadows[5]
    }
  });

  const Bookings = ({ classes }) => {
    const [activeStep, setActiveStep] = useState(0);
    const handleChange = index => e => setActiveStep(index);
    const nandleNext = () => setActiveStep(activeStep + 1);
    const nandlePrev = () => setActiveStep(activeStep - 1);
    const tabs = ["New Bookings", "Pendings", "accepted", "postponed"];
  
    return (
      <Paper style={{}} elevation={1} className='container horizontal-scrollable' id="paper">
        <Typography
          variant="h4"
          gutterBottom
          color="primary"
          style={{ padding: "0 8px" }}
        >
          Your Appointment Details
        </Typography>
        <Typography gutterBottom>
          This information will let us know about your preferences.
        </Typography>
        <BookHeader
          tabs={tabs}
          activeStep={activeStep}
          handleChange={handleChange}
        />
  
        <form>
          <SwipeableViews index={activeStep} onChangeIndex={handleChange}>
           <NewBookings />
           <Pendings />
           <Accepted />
           <Postponed />
          </SwipeableViews>
          <Grid
            container
            justifyContent="space-between"
            style={{ padding: "16px 16px" }}
          >
            <Grid item>
              <Button
                disabled={activeStep === 0}
                onClick={nandlePrev}
                variant="contained"
                color="default"
                className={`${classes.navigation} ${classes.prevBtn}`}
              >
                Back
              </Button>
            </Grid>
            {activeStep < tabs.length - 1 && (
              <Grid item>
                <Button
                  color="primary"
                  className={classes.navigation}
                  variant="contained"
                  onClick={nandleNext}
                >
                  Next
                </Button>
              </Grid>
            )}
            {activeStep === tabs.length - 1 && (
              <Grid item>
                <Button
                  color="primary"
                  className={classes.navigation}
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
            )}
          </Grid>
        </form>
      </Paper>
    );
  };
  export default withStyles(style)(Bookings);
  
