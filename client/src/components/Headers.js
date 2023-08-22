import React, { useState } from 'react'
import {Box,AppBar,Toolbar,Button,Typography,Tabs,Tab} from "@mui/material";
import { Link } from 'react-router-dom';

const Headers = () => {
  const[value,setValue]=useState();
  return (
    <>
      
   <AppBar position='sticky'>
    <Toolbar>
        <Typography>
        my blog app
        </Typography>
        <Box display={'flex'} marginleft="auto" marginRight='auto'>
        <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
          <Tab label="Blogs" LinkComponent={Link} to ="/blogs"> </Tab>
          <Tab label=" my Blogs" LinkComponent={Link} to ="/myblogs"> </Tab>
        </Tabs>
        </Box>
       <Box display={'flex'}marginLeft={"auto"}>
        <Button sx={{margin:1,color:'white'}}LinkComponent={Link} to= "/login">login</Button>
        <Button sx={{margin:1,color:'white'}}LinkComponent={Link} to= "/Register">register</Button>
        <Button sx={{margin:1,color:'white'}}LinkComponent={Link} to= "/logout">logout</Button>

       </Box>
    </Toolbar>
   </AppBar>
    </>
  )
}

export default Headers
