import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Paper, Tabs, Tab, TabPanel,Typography,Box } from "@mui/material";

export default function ToggleTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const paperstyles = {
    width : 340,
    margin : '10px auto'
  }
  return (
    <>
      <Paper style={paperstyles} elevation={20}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Login"></Tab>
          <Tab label="Sign up"></Tab>
        </Tabs>
        <TabPanel value={value} index={0}>
          <Login handleChange={handleChange}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUp/>
        </TabPanel>
      </Paper>
    </>
  );
}
