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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

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
        const res = await axios.get(`/user/${id}`);
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/user/${id}`, data);
      toast.success("Product updated successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch {
      toast.error("Update failed.");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={2}>
          <EditIcon sx={{ mr: 1, verticalAlign: "middle" }} />
          Update Product
        </Typography>
        <form onSubmit={handleUpdate}>
          <Stack spacing={2}>
            <TextField
              label="Series No."
              value={id}
              disabled
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