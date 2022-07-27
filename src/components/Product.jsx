import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from "../context/CartContext";




const Product = ({ product }) => {
  const cart = useContext(CartContext);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const addProduct = (product) => {
    cart.addCart(product, 1);
  }
  return (
    <Card sx={{ maxWidth: 237 }} style={{margin: 20}} key={product.id}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => addProduct(product)}>
            <AddShoppingCartIcon />
          </IconButton>
        }
        title={product.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" color="palette.warning.light">
          $400
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect
        </Typography>
      </CardContent>
      
    </Card>
  );
};

export default Product;
