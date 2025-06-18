import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = ({ search, setSearch }) => {
  return (
    <AppBar position="static"  color="default" elevation={1}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;