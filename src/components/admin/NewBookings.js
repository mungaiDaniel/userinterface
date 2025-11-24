import {
  withStyles,
  Grid,
  ButtonBase,
  FormControlLabel,
  Radio,
  Tooltip
} from "@material-ui/core";
import classNames from "classnames";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";


const style = theme => {
  // const active = {
  //   filter: "grayscale(0)",
  //   border: `3px solid ${theme.palette.primary.main}`
  // };
  return {
    root: {},
    mainClass: {
      height: 106,
      width: 106,
      borderRadius: "50%",
      boxShadow: theme.shadows[5],
      margin: 8,
      color: theme.palette.primary.light,
      border: `3px solid ${theme.palette.common.white}`,
      filter: "grayscale(1)",
      transition: theme.transitions.create(),
      "&:active": {
        filter: "grayscale(0)",
        border: `3px solid ${theme.palette.primary.main}`
      },
      "&:hover": {
        filter: "grayscale(0)",
        border: `3px solid ${theme.palette.secondary.main}`
      }
    },
    mainLblClass: {
      color: theme.palette.grey[700],
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 16
    },
    //class for checked item
    checked: {
      filter: "grayscale(0)",
      border: `3px solid ${theme.palette.primary.main}`
    },
    LblChecked: { color: theme.palette.primary.main },
    itemInner: {
      height: 66,
      width: 66,
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      boxShadow: theme.shadows[9]
    },
    input: {
      height: 106,
      width: 106,
      position: "absolute",
      top: -6,
      left: -6,
      opacity: 0
    }
  };
};

const NewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/bookings", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
      },
      credentials: 'include'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setBookings(Array.isArray(data) ? data : []);
    })
    .catch(error => {
      console.error('Error fetching bookings:', error);
      setBookings([]);
    })
    .finally(() => setLoading(false));
  }, []);

  // Helper to get customer name and phone
  const getCustomerName = (booking) => {
    // Try common fields, fallback to "-"
    return (
      booking.customer_name ||
      booking.customerName ||
      `${booking.FirstName || ""} ${booking.LastName || ""}`.trim() ||
      booking.name ||
      "-"
    );
  };

  const getPhoneNumber = (booking) => {
    return (
      booking.phone ||
      booking.phone_number ||
      booking.PhoneNumber ||
      booking.mobile ||
      "-"
    );
  };

  return (
    <div className='bg-light p-4'>
      <Typography variant='h5' color='primary' align='center' gutterBottom>
        New Bookings
      </Typography>
      {loading ? (
        <Typography align="center">Loading...</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Booking ID</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{getCustomerName(booking)}</TableCell>
                  <TableCell>{getPhoneNumber(booking)}</TableCell>
                  <TableCell>{booking.service || booking.service_id || "-"}</TableCell>
                  <TableCell>{booking.employee || booking.employee_id || "-"}</TableCell>
                  <TableCell>{booking.date || "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
export default NewBookings;