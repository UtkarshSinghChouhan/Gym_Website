import React from 'react'
import {Stack, Box, Typography, Button} from "@mui/material"
import banner from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box
      position='relative'
      p="20px"
      sx={{
        mt: {
          xs : "141px",
          lg : "95px"
        },

        ml : {
          sm : "172px"
        }
      }}

      // bgcolor="#faadac"
    >


      <Typography 
        color="#FF2625"
        fontWeight="600"
        fontSize="26px"
      >
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{
          fontSize : {
            xs : '40px',
            lg : '46px'
          }
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography
        fontSize='22px'
        lineHeight='35px'
        mb={2}
        mt={1}
      >
        Check out the most effective exercises
      </Typography>

      <Button 
        variant='contained' 
        color='error'
        href='#exercises'
        sx={{
          padding:" 8px 25px"

        }}
      >
        Explore Exercises
      </Button>


      <Typography
        fontWeight={700}
        fontSize= "190px"
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: {
            lg : "block",
            xs: "none"
          }
        }}
      >
        Exercise
      </Typography>

      <img src={banner} alt="banner" className='hero-banner-img' />


    </Box>
  )
}

export default HeroBanner