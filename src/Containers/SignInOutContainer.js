import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Register from "../Components/Register";
import Login from "../Components/Login";

const SignInOutContainer = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: 390, margin: "140px auto" }
  const tabsStyle = { marginLeft: "20%" }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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

  return (
    <Paper style={paperStyle}>
      <Tabs value={value} onChange={handleChange} style={tabsStyle}>
        <Tab label="Connexion" />
        <Tab label="Inscription" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Register />
      </TabPanel>
    </Paper>
  )
}

export default SignInOutContainer;