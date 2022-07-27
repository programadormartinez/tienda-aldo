import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Navbar from "../components/Navbar";
import CategoriesComponent from "../components/CategoriesComponent";
import Products from "../components/Products";
import { CartContext } from "../context/CartContext";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import CategoryContextProvider from "../context/CategoryContext";
const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const Home = (props) => {
  const { window } = props;
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;
  const cart = useContext(CartContext);
  return (
    <Root>
      <Navbar toggleDrawer={toggleDrawer(true)} cartDirect={false}></Navbar>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(35% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Container
        style={{
          marginTop: 0,
        }}
      >
        <CategoryContextProvider>
          <CategoriesComponent></CategoriesComponent>
          <Products></Products>
        </CategoryContextProvider>
      </Container>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          {open ? (
            <Box sx={{ textAlign: "center", pt: 1 }}>
              <Button onClick={toggleDrawer(false)} color="secondary" >Cerrar</Button>
            </Box>
          ) : (
            <></>
          )}
          <Typography sx={{ pl:2, color: "text.secondary" }}>
            {cart.cartList.length} Productos
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            height: "100%",
          }}
        >
          <Stack direction="row" spacing={2}>
            {cart.cartList.length ? (
              cart.cartList.map((item) => {
                return (
                  <Card
                    sx={{ width: 150 }}
                    style={{ margin: 15 }}
                    key={item.id}
                  >
                    <CardMedia
                      component="img"
                      height="80"
                      image={item.image}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="small" color="palette.warning.light">
                        {item.title}
                      </Typography>
                      <br />
                      <Typography variant="small" color="palette.warning.light">
                        Cantidad : {item.qty}
                      </Typography>
                      <br />
                      <Button onClick={()=> cart.deletedProduct(item.id)}> Eliminar</Button>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <></>
            )}
            <Link
              to={"/cart"}
              style={{
                textDecoration: "none",
                backgroundColor: "#9c27b0",
                margin: "120px",
                border: "1px solid #9c27b0",
                borderRadius: 20,
              }}
            >
              <IconButton
                aria-label="add to shopping cart"
                style={{ color: "white" }}
              >
                <ShoppingCartCheckoutIcon />
              </IconButton>
            </Link>
          </Stack>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
