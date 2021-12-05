import { Drawer, Typography } from "@mui/material";
import React from "react";

const page = {
  background: "#f9f9f9",
  width: "100%",
  height: "100vh",
};

// const drawer = {
//   width: "240px",
// };

export const Layout = ({ children }) => {
  return (
    <div>
      <Drawer
        style={{ width: 400 }}
        variant="permanent"
        anchor="left"
        classes={{
          paper: {
            width: 250,
          },
        }}
      >
        <div>
          <Typography variant="h5">Ninja Notes</Typography>
        </div>
      </Drawer>
      <div style={page}>{children}</div>
    </div>
  );
};
