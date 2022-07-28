import { AppBar, Badge, Toolbar, Typography, Link, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useAuth } from "../context/AuthController";
import { CartContext } from "../context/CartContext";
import { Link as LinkRouter } from "react-router-dom";

const Navbar = ({ toggleDrawer, cartDirect }) => {
  const cart = useContext(CartContext);
  const { user } = useAuth();
  return (
    <AppBar color="default" elevation={0} position="static">
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <LinkRouter to={"/"}>
            <Button
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1.5 }}
              style={{ textDecoration: "none" }}
            >
              Tienda Aldo
            </Button>
          </LinkRouter>
        </Typography>
        <nav>
          {!user ? (
            <Button
              variant="button"
              color="text.secondary"
              href={"/login"}
              sx={{ my: 1, mx: 1.5 }}
              style={{ textDecoration: "none" }}
            >
              Iniciar sesión
            </Button>
          ) : (
            <LinkRouter to={"/account"}>
              <Button
                variant="button"
                color="text.secondary"
                sx={{ my: 1, mx: 1.5 }}
                style={{ textDecoration: "none" }}
              >
                Mi cuenta
              </Button>
            </LinkRouter>
          )}
          |
          {cart.cartList && cart.cartList?.length && !cartDirect ? (
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 30, mx: 2.5 }}
              onClick={() => toggleDrawer(true)}
            >
              <Badge badgeContent={cart.cartList.length} color="secondary">
                <LocalGroceryStoreIcon />
              </Badge>
            </Link>
          ) : (
            <></>
          )}
          {cartDirect ? (
            <LinkRouter to={"/cart"}>
              <Link
                variant="button"
                color="text.primary"
                sx={{ my: 30, mx: 2.5 }}
              >
                <Badge badgeContent={cart.cartList.length} color="secondary">
                  <LocalGroceryStoreIcon />
                </Badge>
              </Link>
            </LinkRouter>
          ) : (
            <></>
          )}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
