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
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import productNames from "./product";

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
      await axios.post("/", data);
      toast.success("Product added successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast.error("Failed to add product.");
    }
  };

  return (
    <Box sx={{ maxWidth: 420, mx: "auto", mt: 5 }}>
      <Paper sx={{ p: { xs: 2, sm: 4 }, borderRadius: 3, boxShadow: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Typography variant="h5" mb={2} sx={{ fontWeight: 700 }}>
            <AddIcon sx={{ mr: 1, verticalAlign: "middle" }} />
            Add Product
          </Typography>
          <IconButton onClick={() => navigate("/")}>
            <ExitToAppIcon />
          </IconButton>
        </Box>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Series No."
              name="Series_No"
              value={data.Series_No}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
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
              variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
                />
              )}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ fontWeight: 600, fontSize: "1rem", borderRadius: 2 }}
            >
              Add
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Insert;
