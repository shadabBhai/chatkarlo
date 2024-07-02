import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/StyledComponents";

import { useFileHandler, useInputValidation } from "6pp";
import { usernamevlidator } from "../utils/validator";
import { bgGradient } from "../constants/color";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const name = useInputValidation("");
  const password = useInputValidation("");
  const bio = useInputValidation();
  const userName = useInputValidation("", usernamevlidator);
  const avatar = useFileHandler("single");

  const handelLogIn = (e) => {
    e.preventDefault();
    // Validate form
    if (!userName.isValid || !password.isValid) return;

    // Call login API with userName and password
    // setIsLogin(false); // For demonstration purposes, simulate successful login
  };
  const handelSignUp = (e) => {
    e.preventDefault();
    // Validate form
    if (!name.isValid || !password.isValid || !bio.isValid) return;

    // Call signup API with name, password, and bio
    // setIsLogin(false); // For demonstration purposes, simulate successful signup
  };

  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        component={"main"}
        maxwidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                onSubmit={handelLogIn}
                style={{ width: "100%", marginTop: "1rem" }}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={userName.value}
                  onChange={userName.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Button
                  sx={{ marginTop: "1rem" }}
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  Log In
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  {" "}
                  OR
                </Typography>
                <Button
                  variant="text"
                  fullWidth
                  onClick={() => setIsLogin(!isLogin)}
                >
                  SIGN UP INSTEAD
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form
                onSubmit={handelSignUp}
                style={{ width: "100%", marginTop: "1rem" }}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",

                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.8)",
                      },
                    }}
                    component="label"
                  >
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </IconButton>
                </Stack>
                {avatar.error && (
                  <Typography
                    m={"1rem auto"}
                    width={"fit-content"}
                    display={"block"}
                    color="error"
                    variant="caption"
                  >
                    {avatar.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={userName.value}
                  onChange={userName.changeHandler}
                />
                {userName.error && (
                  <Typography color="error" variant="caption">
                    {userName.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />

                <Button
                  sx={{ marginTop: "1rem" }}
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  Sign Up
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  {" "}
                  OR
                </Typography>
                <Button
                  variant="text"
                  fullWidth
                  onClick={() => setIsLogin(!isLogin)}
                >
                  LOG IN INSTEAD
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
