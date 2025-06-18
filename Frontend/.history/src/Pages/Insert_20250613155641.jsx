import React from "react";
import axios from "../axios/axios.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Stack,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../Components/Navbar.jsx";

const Insert = () => {
  const [data, setData] = React.useState({
    Series_No: "",
    Product_Purchase_Date: "",
    Product_Name: "",
    Product_Dealership: "",
  });
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const get

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user", data);
      toast.success("Product added successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast.error("Failed to add product.");
    }
  };

  return (
    <>
    <Navbar/>
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={2}>
          <AddIcon sx={{ mr: 1, verticalAlign: "middle" }} />
          Add Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Series No."
              name="Series_No"
              value={data.Series_No}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Product Purchase Date"
              name="Product_Purchase_Date"
              type="date"
              value={data.Product_Purchase_Date}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField
              label="Product Name"
              name="Product_Name"
              value={data.Product_Name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Product Dealership"
              name="Product_Dealership"
              value={data.Product_Dealership}
              onChange={handleChange}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
          </Stack>
        </form>
      </Paper>
    </Box>
    </>
  );
  
};

export default Insert;
