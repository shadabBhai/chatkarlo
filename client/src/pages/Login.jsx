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

import { useInputValidation } from "6pp";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const name = useInputValidation("");
  const password = useInputValidation("");
  const bio = useInputValidation("");
  const userName = useInputValidation("");

  return (
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
            <form action="" style={{ width: "100%", marginTop: "1rem" }}>
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
            <form action="" style={{ width: "100%", marginTop: "1rem" }}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
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
                  <VisuallyHiddenInput type="file" />
                </IconButton>
              </Stack>
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
  );
};

export default Login;
