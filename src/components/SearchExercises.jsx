import React, {useEffect, useState} from 'react'

import { Box, Button, Stack, TextField, Typography} from "@mui/material"

import { fetchData, exerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([]);
  
  const fetchExercisesData = async( )=> {
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

    console.log(bodyPartsData)

    setBodyParts(['all',...bodyPartsData]);
  }

  
  useEffect(() => {
    
    fetchExercisesData();
    
  }, [])
  
  const handleSearch = async() => {
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      console.log(exerciseData)

      const searchedExercises = exerciseData.filter((exercise) => (
        exercise.name.toLowerCase().includes(search) || 
        exercise.target.toLowerCase().includes(search) || 
        exercise.equipment.toLowerCase().includes(search) || 
        exercise.bodyPart.toLowerCase().includes(search)
      ))

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises)
    }
  }
  // useEffect(() => {
  //   if(search){
  //     handleSearch();
  //   }
  // }, [])
  

  return (
    <Stack
      alignItems="center"
      mt="30px"
      justifyContent="center"
      p="20px" 
      sx={{
        mt:{
          lg : '0px',
          xs: "37px"
        }
      }}     
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg : '44px',
            xs : "30px"
          }
        }}
        mb="50px"
        textAlign="center"
      >

        Awesome Exercises You <br /> Should Know 
      </Typography>


      <Box
        position="relative"
        mb="72px"
        display='flex'
        justifyContent='center'
      >

        <TextField
          // variant='oulined'
          sx={{
            input:{
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px 0 0 4px'
            },
            width:{
              lg: '800px',
              xs: '280px'
            },

            backgroundColor: "#fff",
            borderRadius: '40px 0 0 40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
          type='text'
          placeholder='Search Exercises...'
        />

        <Button
          sx={{
            bgcolor:'#FF2625',
            color: "#fff",
            textTransform: 'none',
            width : {
              lg: "175px",
              xs: "80px"
            },
            fontSize: {
              lg: "20px",
              xs : '14px'
            },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}

          onClick={() => handleSearch()}
          className='search-btn'
        >
          Search
        </Button>
      </Box>


      <Box sx={{
        position: 'relative',
        width: '100%',
        p: '20px'
      }}>

        <HorizontalScrollbar data={bodyParts} isbodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} />


      </Box>


    </Stack>
  )
}

export default SearchExercises