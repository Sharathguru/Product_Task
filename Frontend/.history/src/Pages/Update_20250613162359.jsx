import React from "react";
import axios from "../axios/axios.js";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Stack,
  Alert,
  Autocomplete,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
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

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [id] = React.useState(location.state?.id || "");
  const [data, setData] = React.useState({
    Product_Purchase_Date: "",
    Product_Name: "",
    Product_Dealership: "",
  });
  const [error, setError] = React.useState("");

  // Fetch existing data for the product
  React.useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const res = await axios.get(`/products/${id}`);
        if (res.data) {
          setData({
            Product_Purchase_Date: res.data.Product_Purchase_Date,
            Product_Name: res.data.Product_Name,
            Product_Dealership: res.data.Product_Dealership,
          });
        }
      } catch {
        setError("Failed to fetch product data.");
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAutoChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/products/${id}`, data);
      toast.success("Product updated successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch {
      toast.error("Update failed.");
    }
  };

  return (
    <Box sx={{ maxWidth: 420, mx: "auto", mt: 5 }}>
      <Paper sx={{ p: { xs: 2, sm: 4 }, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h5" mb={2} sx={{ fontWeight: 700 }}>
          <EditIcon sx={{ mr: 1, verticalAlign: "middle" }} />
          Update Product
        </Typography>
        <form onSubmit={handleUpdate}>
          <Stack spacing={2}>
            <TextField
              label="ID"
              value={id}
              disabled
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
              Update
            </Button>
            {error && <Alert severity="error">{error}</Alert>}
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Update;