import React, {useState} from 'react';
import {Box, Container, IconButton, InputAdornment, Tooltip, Typography} from "@mui/material";
import SingleSignOnButtons from "./SingleSignOnButtons";
import StyledTextField from "./StyledTextField";
import LoginButton from "./LoginButton";
import ErrorIcon from '@mui/icons-material/Error';
import {Visibility, VisibilityOff} from "@mui/icons-material";

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(true);
  const [invalidUsername, setInvalidUsername] = useState(true);
  // const [invalidPasswordReason, setInvalidPasswordReason] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (password.length > 0) {
      setInvalidPassword(false);
    }
    else {
      setInvalidPassword(true);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (username.length > 0) {
      setInvalidUsername(false);
    }
    else {
      setInvalidUsername(true);
    }
  };

  // handle when user clicks on the password show icon
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Container className="login-box" component="main" maxWidth="xs">
      <Box>
        <Typography className="login-text" component="h1" variant="h4">
          Login
        </Typography>
        <Box component="form">
          <StyledTextField
            margin="normal"
            label="Username"
            name="username"
            onChange={(e) => handleUsernameChange(e)}
            required
            fullWidth
          />
          <StyledTextField
            margin="normal"
            label="Password"
            name="password"
            onChange={(e) => handlePasswordChange(e)}
            type={showPassword ? "text" : "password"}
            required
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {/*<Tooltip title={invalidPasswordReason}>*/}
                  {/*  <IconButton*/}
                  {/*  >*/}
                  {/*    {invalidPassword ? <ErrorIcon color="error"/> : ''}*/}
                  {/*  </IconButton>*/}
                  {/*</Tooltip>*/}
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    onMouseDown={handleShowPassword}
                  >
                    {showPassword ? <Visibility sx={{color: "#8B8A8B"}}/> : <VisibilityOff sx={{color: "#8B8A8B"}} />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <div className="login-button-container">
            <LoginButton
              type="submit"
              className="login-button"
              fullWidth
              variant="outlined"
              disabled={invalidPassword || invalidUsername}
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </LoginButton>
          </div>

        </Box>
      </Box>
      <hr/>
      <SingleSignOnButtons/>
    </Container>
  );
}

export default Login;