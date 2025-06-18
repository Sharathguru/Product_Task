import React from "react";
import axios from "../axios/axios.js";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { Typography, Grid } from "@mui/material";

const Fetch = ({ search }) => {
  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get("/products");
      setProducts(res.data);
    } catch (err) {
      setError("Failed to fetch data.");
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (seriesNo) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`/user/${seriesNo}`);
      setProducts(products.filter((item) => item.Series_No !== seriesNo));
      toast.success("Product deleted successfully!");
    } catch {
      toast.error("Delete failed.");
    }
  };

  const handleEdit = (seriesNo) => {
    navigate(`/update`, { state: { seriesNo } });
  };

  const handleAdd = () => {
    navigate("/insert");
  };

  const filteredProducts = products.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, width: "100%" }}>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Grid item>
          <Typography variant="h6" fontWeight="bold">Product List</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAdd}
          >
            Add
          </Button>
        </Grid>
      </Grid>

      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          overflowX: { xs: "auto", md: "visible" },
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        <Table size="small" aria-label="responsive table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ minWidth: 100, fontWeight: "bold" }}>Series No.</TableCell>
              <TableCell sx={{ minWidth: 150, fontWeight: "bold" }}>Product Purchase Date</TableCell>
              <TableCell sx={{ minWidth: 150, fontWeight: "bold" }}>Product Name</TableCell>
              <TableCell sx={{ minWidth: 150, fontWeight: "bold" }}>Product Dealership</TableCell>
              <TableCell sx={{ minWidth: 100, fontWeight: "bold" }} align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((item, idx) => (
              <TableRow key={item.Series_No + idx}>
                <TableCell>{item.Series_No}</TableCell>
                <TableCell>
                  {item.Product_Purchase_Date &&
                    !isNaN(new Date(item.Product_Purchase_Date)) &&
                    new Date(item.Product_Purchase_Date).toLocaleDateString("en-GB")}
                </TableCell>
                <TableCell>{item.Product_Name}</TableCell>
                <TableCell>{item.Product_Dealership}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(item.Series_No)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(item.Series_No)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {filteredProducts.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {error && <Typography color="error" mt={2}>{error}</Typography>}
    </Box>
  );
};

export default Fetch;
