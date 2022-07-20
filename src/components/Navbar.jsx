
import { AppBar, Icon, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Navbar = ({toggleDrawer}) => {
  return (
    <AppBar
        color="default"
        elevation={0}
        position="static"
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="p" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Tienda Aldo
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Categorias
              
            </Link>
            |
            {/* <Link>
            <h1>PAGIINA A ORIENTARME: https://www.chileamano.com/</h1>
            </Link> */}
            <Link
              variant="button"
              color="text.secondary"
              href="/login"
              sx={{ my: 1, mx: 1.5 }}
            >
              Iniciar sesión
            </Link>
            |
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 30, mx: 2.5 }}
              onClick={()=> toggleDrawer(true)}
            >
                <Icon><LocalGroceryStoreIcon /></Icon>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar