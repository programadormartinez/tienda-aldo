import React from "react";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




const Product = ({ props }) => {
  const ExpandMore = styled((props = {expand: boolean}) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 237 }} style={{margin: 20}}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <AddShoppingCartIcon />
          </IconButton>
        }
        title="Remera Artesanal Romana"
      />
      <CardMedia
        component="img"
        height="194"
        image="./assets/remera-artesanal.jpg"
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
