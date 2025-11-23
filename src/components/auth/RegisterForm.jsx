import { useState } from "react";
import httpClient from "../../httpClient";
import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from '@mui/material';



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

const RegisterForm = () => {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState('')
  const [succes, setSuccess] = useState('')

  const RegisterUser = async  () => {
    console.log(lastName, firstName, email, password, location, phoneNumber);

    const resp = await httpClient.post("http://127.0.0.1:5000/api/v1/users", {
      firstName,
      lastName,
      email,
      password,
      location,
      phoneNumber,
    }).then((response) => {
      setSuccess('Sussessful registered now you can login')
      setTimeout(() =>{
        setSuccess('')
      }, 4000)

      navigate('/login')
    }).catch((err) =>{
      console.log(err)
      setError('Input error check again')
              setTimeout(() =>{
                setError('')
              }, 4000)
    })
  };

  return (
      <>
        <Stack spacing={3} style={{marginTop: '5rem'}} >
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            
            <TextField
              fullWidth
              label="First name"
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <TextField
              fullWidth
              label="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Stack>
          <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required

            />
            </Stack>
        
            <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
            >
            

            <TextField
              fullWidth
              autoComplete="current-password"
              required
              type={showPassword ? "text" : "password"}
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      <Icon
                        icon={
                          showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >

            <TextField
              fullWidth
              label="Phone Number"
              value={phoneNumber}
              onChange={(e)=> setPhoneNumber(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            
          </Stack>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            { succes && <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  <strong>{ succes } </strong>
</Alert> }
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={() => RegisterUser()}
            >
              Sign up
            </LoadingButton>
            { error && <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  <strong>{ error } </strong>
</Alert> }
          </Box>
        </Stack>
      </>

  );
};

export default RegisterForm;
