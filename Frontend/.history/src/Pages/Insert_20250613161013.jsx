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
  Autocomplete,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import productNames from "./product"; // Import your product names

const dealershipOptions = [
  "Flipkart",
  "LG-7900T",
  "DSC-RX100",
  "Best Buy",
  "Dealer A",
  "Dealer B",
  "Dealer C",
];

const Insert = () => {
  const [data, setData] = React.useState({
    Series_No: "",
    Product_Purchase_Date: "",
    Product_Name: "",
    Product_Dealership: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAutoChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.Product_Name || !data.Product_Dealership) {
      toast.error("Please fill all fields.");
      return;
    }
    try {
      await axios.post("/products", data);
      toast.success("Product added successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast.error("Failed to add product.");
    }
  };

  return (
    <>
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
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
            <Autocomplete
              freeSolo
              options={productNames}
              value={data.Product_Name}
              onInputChange={(_, value) => handleAutoChange("Product_Name", value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Product Name"
                  required
                  fullWidth
                />
              )}
            />
            <Autocomplete
              freeSolo
              options={dealershipOptions}
              value={data.Product_Dealership}
              onInputChange={(_, value) => handleAutoChange("Product_Dealership", value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Product Dealership"
                  required
                  fullWidth
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
    </>
  );
};

export default Insert;
