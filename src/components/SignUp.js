import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  FormHelperText,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export default function SignUp() {
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 300,
  };
  const marginTop = { marginTop: 5 };
  const avatarStyle = {
    backgroundColor: "#4CAF50",
  };
  const headerStyle = {
    margin: 2,
  };
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    termsAndConditions: false,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 5000);
  };
  return (
    <>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h3 style={headerStyle}>Sign Up</h3>
            <Typography variant="caption">
              Please fill this form to create an account
            </Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  label="Name"
                  variant="standard"
                  placeholder="Enter your name"
                  helperText={<ErrorMessage name="name" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="Email"
                  variant="standard"
                  placeholder="Enter your email"
                  helperText={<ErrorMessage name="email" />}
                />

                <Field
                  as={TextField}
                  fullWidth
                  name="password"
                  type="password"
                  variant="standard"
                  label="Password"
                  placeholder="Enter your password"
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  variant="standard"
                  placeholder="Enter your phone number"
                  helperText={<ErrorMessage name="phoneNumber" />}
                />
                <FormControlLabel
                  className="acceptlable"
                  control={<Field as={Checkbox} name="termsAndConditions" />}
                  label="I accept the terms and conditions."
                />
                <FormHelperText>
                  <ErrorMessage name="termsAndConditions" />
                </FormHelperText>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  color="primary"
                  fullWidth
                >
                  {props.isSubmitting ? "Loading" : "Sign up"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </>
  );
}
