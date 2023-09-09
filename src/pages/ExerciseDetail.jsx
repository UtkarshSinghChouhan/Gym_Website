import React,{useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {Box} from "@mui/material"

import {exerciseOptions, youtubeOptions, fetchData} from "../utils/fetchData"
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscle, setTargetMuscle] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([]);


  const {id} = useParams()
  // console.log(id)

  const fetchExerciseData = async() => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    
    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
    console.log(exerciseDetailData)
    setExerciseDetail(exerciseDetailData)


    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
    // console.log(exerciseVideosData.contents)
    setExerciseVideos(exerciseVideosData.contents);

    const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
    console.log(targetMuscleExerciseData)
    setTargetMuscle(targetMuscleExerciseData)

    const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
    console.log(equipmentExerciseData)
    setEquipmentExercises(equipmentExerciseData)
  }

  useEffect(() => {
    fetchExerciseData();
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscle={targetMuscle}  equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail;