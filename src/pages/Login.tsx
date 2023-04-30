import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Link,
  TextField,
  Typography
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";

function Login() {
  const navigate = useNavigate();

  const { logIn } = useAuth();

  const navigateToSignUp = () => {
    navigate("/register");
  };

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        height: "100vh"
      }}>
      <Card
        sx={{
          width: "500px",
          textAlign: "center",
          padding: "2em",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}>
        <Avatar sx={{ bgcolor: "secondary.main", margin: "auto" }}>
          <LockOutlined />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mt: 2
          }}>
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            onClick={logIn}
            sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                onClick={navigateToSignUp}
                sx={{
                  cursor: "pointer"
                }}
                variant="body2">
                You Dont have any account? Sign Up Now!
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}

export default Login;
