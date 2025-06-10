import * as React from 'react';
import Input from '@mui/material/Input';
import {  styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { Typography} from '@material-ui/core';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { motion } from "framer-motion";
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import { LoadingButton } from "@mui/lab";
import { Button } from '@mui/material';
import httpClient from '../../httpClient';
import AllServices from './AllServices';
import { useState } from "react";
import { Alert, AlertTitle } from '@mui/material';




const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};


const Servicesoffered = () => {

  const [style, setStyle] = React.useState("")
  const [cost, setCost] = React.useState("")
  const [duration, setDuration] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [error, setError] = useState('')


  const AddService = async () => {
    console.log(style, cost, duration, description);

    try {
    const resp = await httpClient.post(
      "https://appointment-0nu1.onrender.com/api/v1/stylings",
      {
        style,
        cost,
        duration,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    if (resp.data) {
      window.alert('success');
    }
    console.log(resp.data);
  } catch (err) {
    setError('NOT ADMIN');
    setTimeout(() => {
      setError('');
    }, 4000);
  }
  };


  return (
    <div className="app container">
      <Typography gutterBottom variant='h5' className='py-4 text-primary'>
          Add new services to our application
        </Typography>
   <Stack spacing={3}>
   
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <Typography>
          Styles
        </Typography>
              <ValidationTextField
      variant="standard"
      value={style}
      onChange = {(e) => setStyle(e.target.value)}
    />

          </Stack>
          
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <Typography>
          Prizes
        </Typography>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input
            variant={"standard"}
            value={cost}
            onChange={(e)=> setCost(e.target.value)}
            endAdornment={<InputAdornment position="end">ksh</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
          />
          <FormHelperText id="filled-weight-helper-text">cost </FormHelperText>
        </FormControl>
          </Stack>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            
            <Typography>
          Time.
        </Typography>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            endAdornment={<InputAdornment position="end">hour</InputAdornment>}
          />
          <FormHelperText id="filled-weight-helper-text"> duration </FormHelperText>
        </FormControl>

          </Stack>
          
          <Stack

            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
          
            <Typography>
          Detail
        </Typography>
        
            
            <TextField
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
          multiline
          rows={5}
          variant="standard"
        />

          </Stack>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
            style={{marginBottom: "20px"}}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={() => AddService()}
            >
              Add Service
            </LoadingButton>
          </Box>
          { error && <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  <strong>{ error } </strong>
</Alert> }
          
          
  </Stack>

  <AllServices />
  </div>
  )
}

export default Servicesoffered
