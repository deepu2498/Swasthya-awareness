import React from 'react'
import TipsAndTricks from '../components/TipsAndTricks';
import DiseasePrediction from '../components/DiseasePrediction';
import HomeRemedies from '../components/HomeRemedies';
import AcupressureExercises from '../components/AcupressureExercises';


const Home = () => (
  <main>
    <h1>Welcome to Swasthya Awareness</h1>
   <TipsAndTricks/>
   <AcupressureExercises/>
   <HomeRemedies/>
   <DiseasePrediction/>
   
   
  </main>
  

);
 export default Home;
