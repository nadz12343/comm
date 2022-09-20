
import {AppBar, Toolbar, IconButton, Typography} from "@mui/material"

import {MenuIcon} from "@mui/icons-material"
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <AppBar position="static" sx={{position: "fixed", top: 0, width: "100%", zIndex: 3}}>
    <Toolbar variant= "dense" sx = {{justifyContent: "space-evenly", backgroundColor: "white", color: "black"}}>
      {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
        <AdbIcon/>
      </IconButton> */}
      <Typography align = "center" variant="h6" color="inherit" component="div">
        <Link href = "/road-bikes">
          Road Bikes        
        </Link>
      </Typography>
      <Typography align = "center" variant='h6'  color="inherit" component='div'>
        <Link href = "/mountain-bikes">
        Mountain Bikes

        </Link>
      </Typography>
      <Typography align = "center" variant='h6'  color="inherit" component='div'>
        Electric Bikes
      </Typography>
    </Toolbar>
  </AppBar>
      </>
  )
}
