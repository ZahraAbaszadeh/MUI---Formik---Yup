import React from "react";
import { Formik, Form, Field,ErrorMessage } from "formik";
import * as Yup from 'yup'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login({ handleChange }) {
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 300,
  };
  const avatarStyle = {
    backgroundColor: "#4CAF50",
  };
  const btnStyle = {
    margin: "17px 0",
  };
  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required")
})
const onSubmit = (values, props) => {
  console.log(values);
    setTimeout(() => {
        props.resetForm()
        props.setSubmitting(false)
    }, 5000)

}
  return (
    <>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h3>Sign in</h3>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  variant="standard"
                  label="Username"
                  name="username"
                  placeholder="Enter username"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="username" />}
                />
                <Field
                  as={TextField}
                  variant="standard"
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={FormControlLabel}
                  name="remember"
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={props.isSubmitting}
                  style={btnStyle}
                  fullWidth
                >
                  {props.isSubmitting ? "Loading" : "Sign in"}
                </Button>
              </Form>
            )}
          </Formik>
          <Typography>
            <Link href="#" className='passwordLink'>Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?
            <Link href="#" onClick={() => handleChange("event", 1)} className="SignupLink">
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
