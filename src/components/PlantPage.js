import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { Link } from "react-router-dom";
import "./Intro.css";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("https://plantdb01.herokuapp.com/plants")
      .then((r) => r.json())
      .then(plantsArray => {
        setPlants(plantsArray)
        console.log("Get plants", plantsArray)
      })
  },[]);

  function handleAddPlant(newPlant){
    const updatedPlantsArray = [...plants, newPlant]
    setPlants(updatedPlantsArray)
  }

  const displayedPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <main>
      <Link to="/">  
        <div className="btn"><p>X</p></div>
      </Link>
      
      <Link to="/">  
        <div className="btn2"><p>X</p></div>
      </Link>

      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <PlantList plants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
