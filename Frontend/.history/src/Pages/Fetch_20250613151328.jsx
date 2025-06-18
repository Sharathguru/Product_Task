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
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import Stack from "@mui/material/Stack";

const Fetch = ({ search }) => {
  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get("/user");
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
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAdd}
          sx={{ mr: 2 }}
        >
          Add
        </Button>
        {/* <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 350,
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <SearchIcon sx={{ ml: 1, mr: 1 }} />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Product"
            inputProps={{ "aria-label": "search product" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Paper> */}
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Series No. of the Product</TableCell>
              <TableCell>Product Purchase Date</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Product Dealership</TableCell>
              <TableCell align="center">Actions</TableCell>
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
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(item.Series_No)}
                      aria-label="edit"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(item.Series_No)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
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
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  );
};

export default Fetch;