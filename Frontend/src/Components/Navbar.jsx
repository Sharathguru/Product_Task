import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = ({ search, setSearch }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        background: "linear-gradient(90deg, #1976d2 0%, #1565c0 100%)", // Custom blue gradient
      }}
    >
      <Container maxWidth="30rem" disableGutters>
        <Toolbar
        //   sx={{
        //     display: "flex",
        //     flexDirection: isMobile ? "column" : "row",
        //     alignItems: isMobile ? "stretch" : "center",
        //     justifyContent: "space-between",
        //     gap: isMobile ? 2 : 0,
        //     py: isMobile ? 1 : 0,
        //   }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              position: "relative",
              right:"8px",
              top:"3px",
              justifyContent: isMobile ? "center" : "flex-start",
              width: isMobile ? "100%" : "auto",
              mb: isMobile ? 1 : 0,
            }}
          >
            <Typography
              variant="h5"
              color="inherit"
              noWrap
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              Product Detail
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              borderRadius: 2,
              backgroundColor: "#f5f7fa",
              width: isMobile ? "100%" : 350,
              display: "flex",
              alignItems: "center",
              px: 2,
              boxShadow: 1,
            }}
          >
            <SearchIcon sx={{ color: "#888", mr: 1 }} />
            <InputBase
              placeholder="Search Product"
              inputProps={{ "aria-label": "search" }}
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ fontSize: isMobile ? "1rem" : "1.1rem" }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;