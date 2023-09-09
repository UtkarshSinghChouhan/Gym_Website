import React, { useEffect, useState } from 'react'
import Pagination from "@mui/material/Pagination"
import {Box, Stack, Typography} from "@mui/material"
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from "../components/ExerciseCard"


const Exercises = ({exercises, setExercises, bodyPart}) => {

  console.log(exercises)

  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  console.log(currentExercises)

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scroll(0, 100)
  }
  
  // useEffect(() => {
  //   // console.log("run")

  // },[currentPage])

  const fetchExercisesData = async() => {
    let exerciseData = [];

    try{
      if(bodyPart === 'all'){
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
        setExercises(exerciseData);

      }else{
        
        // exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/bodyPart/${bodyPart}`, exerciseOptions)

        //Since the above link is not working right now, therefore I have found a work around to show the exercises according to the selected bodyPart from the HorizontalScroll bar

        const allExercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        setExercises(allExercises.filter((exercise) => (
          exercise.name.toLowerCase().includes(bodyPart)
        )))
      }

    }catch(err){
      console.log(err)
    }

  }

  useEffect(() => {
    fetchExercisesData();
  },[bodyPart])

  return (
    <Box
      id="exercises"
      sx={{
        mt : {lg : '110px'}
      }}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>

      <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent="center"
        sx={{
          gap : {
            lg : "100px",
            xs : "50px"
          }
        }}
      >

        {
          currentExercises.map((exercise, idx) => (
            <ExerciseCard exercise={exercise}  key={idx}/>
          ))
        }
      </Stack>

      <Stack
        mt='100px'
        alignItems='center'
      >
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count = {Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises