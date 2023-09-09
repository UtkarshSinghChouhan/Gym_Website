import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Loader from './Loader'

const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
    <Box
      sx={{
        marginTop:{
          lg : "40px",
          xs : "20px"
        }
      }}
      p="20px"
    >
      <Typography variant='h4' mb="33px">
        Watch <span style={{color : "#ff2625", textTransform:"capitalize", fontWeight:"600"}}>{' '}{name}{' '}</span> exercise videos
      </Typography>

      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection:{
            lg : "row"
          },
          gap:{
            lg : "100px",
            xs: "0"
          }
        }}
        
      >
        {
          !exerciseVideos.length ? <Loader /> :
            exerciseVideos?.slice(0, 6).map((item,idx) => (

              <a
                key={idx}
                className='exercise-video '
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
              >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} 
                style={{ borderTopLeftRadius: "20px" }}  />

                <Box >
                  <Typography  variant="h5" color="#000">
                    {item.video.title}
                  </Typography>
                  <Typography variant="h6" color="gray">
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>


            ))
        }
      </Stack>

    </Box>
  )
}

export default ExerciseVideos