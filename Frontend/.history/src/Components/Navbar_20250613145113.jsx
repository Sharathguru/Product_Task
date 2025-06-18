import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img
            src="https://images.unsplash.com/photo-1686052903991-fedc0903ad4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTYxNjR8MHwxfHNlYXJjaHwxfHxFeHBsb3JlJTIwTUclMjBSb2FkJTJDJTIwdmlzaXQlMjBDdWJib24lMjBQYXJrfGVufDB8fHx8MTc0OTQ1NjIwMXww&ixlib=rb-4.1.0&q=80&w=400"
            alt="Logo"
            width={60}
            style={{ marginRight: 16, borderRadius: 8 }}
          />
          <Typography variant="h6" color="inherit" noWrap>
            Product Search
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            borderRadius: 1,
            backgroundColor: "#f1f3f4",
            marginLeft: 0,
            width: 300,
            display: "flex",
            alignItems: "center",
            px: 2,
          }}
        >
          <SearchIcon sx={{ color: "#888", mr: 1 }} />
          <InputBase
            placeholder="Search Product"
            inputProps={{ "aria-label": "search" }}
            fullWidth
            disabled // Remove this if you want to handle search here
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;