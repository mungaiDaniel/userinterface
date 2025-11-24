import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  Paper,
  Grid,
  Typography,
  withStyles,
  Button,
} from "@material-ui/core";
import BookHeader from "./BookHeader";
import RadioMaster from "./RadioMaster";
import SelectServices from "./SelectServices";
import SelectDateDaypart from "./SelectDateDaypart";
import Contacts from "./Contacts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style = theme => ({
    root: {
      border: `8px solid ${theme.palette.common.white}`,
      margin: 36,
      padding: "36px 0 0",
      width: '1000px',
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

  const Content = ({ classes }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [successMsg, setSuccessMsg] = useState("");
    const navigate = useNavigate();
    const nandleNext = () => setActiveStep(activeStep + 1);
    const nandlePrev = () => setActiveStep(activeStep - 1);
    const tabs = ["Master", "Service", "Date", "Contact"];
    const [employee_id, setEmployee_id] = useState("")
    const [employee, setEmployee] = useState("")
    const [service_id, setService_id] = useState("")
    const [service, setService] = useState("")
    const [date, setDate] = useState("")
    
    const BookAppointment = async () => {
      setSuccessMsg("Processing your booking...");
      
      await axios
        .post("https://trina-overmild-cristobal.ngrok-free.dev/api/v1/booking", 
          {
            employee_id,
            service_id,
            date,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem("access_token")}`,
            }
          }
        )
        .then(response => {
          setSuccessMsg("✅ Booking successful! Redirecting to home...");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch(error => {
          console.error("Booking error:", error);
          const errorMsg = error.response?.data?.message || "Booking failed. Please try again.";
          setSuccessMsg(`❌ ${errorMsg}`);
        });
  };
    const handleChange = index => e => {
      setActiveStep(index)
    };

    return (
      <Paper elevation={1} className='lead p-5 w-100 w-sm-50 w-md-50 vw-lg-100' >
        <Typography
          variant="h4"
          gutterBottom
          color="primary"
          style={{ padding: "0 8px" }}
        >
         Your Appointment Information
        </Typography>
        <Typography gutterBottom>
          This information will let us know about your bookings.
        </Typography>
        <BookHeader
          tabs={tabs}
          activeStep={activeStep}
          handleChange={handleChange}
        />
        {successMsg && (
        <Typography align="center" style={{ color: "green", marginBottom: 16 }}>
          {successMsg}
        </Typography>
      )}
  
        <form>
          <SwipeableViews index={activeStep} onChangeIndex={handleChange}>
            <RadioMaster setEmployee_id={setEmployee_id} setEmployee={setEmployee}/>
            <SelectServices setService_id={setService_id} setService={setService}/>
            <SelectDateDaypart date={date} setDate={setDate}/>
          <Contacts employee_id={employee_id} service_id={service_id} date={date} employee={employee} service={service}/>
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
            {activeStep === tabs.length -1 && (
              <Grid item>
                <Button
                  color="primary"
                  type="submit"
                  className={classes.navigation}
                  variant="contained"
                  onClick={e => { e.preventDefault(); BookAppointment(); }}
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
  export default withStyles(style)(Content);
  