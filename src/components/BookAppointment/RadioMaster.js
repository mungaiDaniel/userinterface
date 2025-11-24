import React, { useState, useEffect } from "react";
import {
  withStyles,
  Grid,
  ButtonBase,
  FormControlLabel,
  Radio,
  Tooltip
} from "@material-ui/core";
import classNames from "classnames";
import axios from "axios";
import { Face } from "@material-ui/icons";
import { AccountBalance } from "@material-ui/icons";


const style = theme => {
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

const RadioMasters = ({ classes, setEmployee_id, setEmployee }) => {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(""); // single selected value
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChecked = (id, user) => e => {
    setSelected(id);
    setEmployee_id(id);
    setEmployee(user);
  };

  const itemOuterClass = id =>
    classNames({
      [classes.mainClass]: true,
      [classes.checked]: selected === id
    });
  const labelClass = id =>
    classNames({
      [classes.mainLblClass]: true,
      [classes.LblChecked]: selected === id
    });

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://trina-overmild-cristobal.ngrok-free.dev/api/v1/employees");
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching employees:", err);
        setError("Failed to load employees. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <div>Loading employees...</div>;
  if (error) return <div className="text-danger">{error}</div>;

  return (
    <Grid
      container
      style={{ justifyContent: "center", height: "100%", width: '100%', gap: '1rem', fontSize: '0.5rem' }}
      alignItems="center"
    >
      {users.map((user, i) => (
        <Grid
          item
          xs={6}
          sm={3}
          key={user.id}
          container
          style={{ justifyContent: "center" }}
          alignItems="center"
          direction="column"
        >
          <ButtonBase className={itemOuterClass(user.id)}>
            <input
              type="radio"
              name="master"
              id={user.id}
              value={user.id}
              checked={selected === user.id}
              onChange={handleChecked(user.id, user)}
              className={classes.input}
            />
            <Face className="mb-4" />
            <div className={classes.itemInner} />
          </ButtonBase>
          <label htmlFor={user.id} className={labelClass(user.id)}>
            {user.firstName}
          </label>
        </Grid>
      ))}
      <Grid item xs={8}></Grid>
      <input
        type="text"
        name="selected master"
        value={selected}
        style={{ width: 1, height: 1, opacity: 0.1 }}
        readOnly
      />
    </Grid>
  );
};
export default withStyles(style)(RadioMasters);
