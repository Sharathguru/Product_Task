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
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar
          sx={{
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 2 : 0,
            py: isMobile ? 1 : 0,
          }}
        >
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
              width: isMobile ? "100%" : 300,
              display: "flex",
              alignItems: "center",
              px: 2,
              mt: isMobile ? 1 : 0,
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