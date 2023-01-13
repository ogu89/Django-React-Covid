import React from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { MenuData } from "./MenuData";
import { useNavigate, useLocation } from "react-router-dom";
import DrawerComp from "./DrawerComp";


function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();
  const index = location.pathname === "/" ? false : MenuData.findIndex(object => {
    return location.pathname.includes(object.link);
  }); 

  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ background: "#063970 " }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Covid
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography sx={{ml:1}} variant="h5">Covid</Typography>
              <Tabs
                textColor="inherit"
                sx={{ margin: "auto" }}
                value={index}
              >
                {MenuData.map((val, key) => {
                  return (
                    <Tab
                      key={key}
                      label={val.title}
                      value={key}
                      onClick={() => {
                        navigate(`${val.link}`);
                      }}
                    />
                  );
                })}
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
