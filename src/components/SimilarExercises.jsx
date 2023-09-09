import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from "../components/HorizontalScrollbar"
import Loader from './Loader'

const SimilarExercises = ({ targetMuscle, equipmentExercises}) => {
  return (
    <Box
      sx={{
        mt: {
          lg : "100px",
          xs : "0"
        }
      }}
    >
      <Typography variant='h3' mb={5}>
        Exercises that target the same muscle group
      </Typography>

      <Stack
        direction='row'
        sx={{
          p: "2",
          position: 'relative'
        }}
      >
        {
          targetMuscle.length > 0 ? <HorizontalScrollbar data={targetMuscle} /> : <Loader/> 
        }
      </Stack>


      <Typography variant='h3' mb={5}>
        Exercises that use the same equipment
      </Typography>

      <Stack
        direction='row'
        sx={{
          p: "2",
          position: 'relative'
        }}
      >
        {
          equipmentExercises.length > 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader/> 
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises