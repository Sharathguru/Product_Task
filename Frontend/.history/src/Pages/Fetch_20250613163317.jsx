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
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { toast } from "react-toastify";
import Container from "@mui/material/Container";

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

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`/products/${id}`);
      setProducts(products.filter((item) => item.id !== id));
      toast.success("Product deleted successfully!");
    } catch {
      toast.error("Delete failed.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/update`, { state: { id } });
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
    <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAdd}
          sx={{
            mb: { xs: 2, sm: 0 },
            mr: { sm: 9 },
            fontWeight: 600,
            fontSize: "1rem",
            px: 3,
            borderRadius: 2,
          }}
          fullWidth={true}
        >
          Add
        </Button>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          overflowX: "auto",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f7fa" }}>
              <TableCell sx={{ fontWeight: 700 }}>Series No.</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Product Purchase Date</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Product Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Product Dealership</TableCell>
              <TableCell align="center" sx={{ fontWeight: 700 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.Series_No}</TableCell>
                <TableCell>
                  {item.Product_Purchase_Date &&
                    new Date(item.Product_Purchase_Date).toLocaleDateString("en-GB")}
                </TableCell>
                <TableCell>{item.Product_Name}</TableCell>
                <TableCell>{item.Product_Dealership}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(item.id)}
                      aria-label="edit"
                      sx={{
                        bgcolor: "#e3f2fd",
                        "&:hover": { bgcolor: "#bbdefb" },
                        borderRadius: 2,
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(item.id)}
                      aria-label="delete"
                      sx={{
                        bgcolor: "#ffebee",
                        "&:hover": { bgcolor: "#ffcdd2" },
                        borderRadius: 2,
                      }}
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
    </Container>
  );
};

export default Fetch;