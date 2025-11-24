import React, { useState } from "react";
import { Alert, AlertTitle } from '@mui/material';
import { Link as RouterLink, useNavigate} from "react-router-dom";
import {
  FormControl,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Container
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import axios from "axios";

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


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  const LoginUser = async () => {
    console.log(email, password);

     await axios
    .post("https://trina-overmild-cristobal.ngrok-free.dev/api/v1/login", {
      email,
      password,
    })
    .then((res) =>{
     localStorage.setItem("user_role", res.data.value.user_role)
     localStorage.setItem("access_token", res.data.value.access_token)
     setSuccess('successfully login')
     setTimeout(() => {
      setSuccess('')
     }, 4000)
     navigate('/home')
        })
    .catch((err) => {

      console.log(err)
      setError('Wrong password or email credentials')
              setTimeout(() =>{
                setError('')
              }, 4000)
    })

  }

  return (
    <Container>
     

      <FormControl>

        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >


          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    className="me-2 mt-lg-2"
                  />
                }
                label="Remember me"
              />

              <Link
                component={RouterLink}
                variant="subtitle2"
                to="#"
                underline="hover"
              >
                Forgot password?
              </Link>
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={() => LoginUser()}
            >
              { success && <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  <strong>{ success } </strong>
</Alert> }
              Login
            </LoadingButton>
            { error && <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  <strong>{ error } </strong>
</Alert> }
          </Box>
        </Box>

        </FormControl>
    </Container>
  );
};

export default LoginForm;