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
    fetch("http://localhost:6001/plants")
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
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <PlantList plants={displayedPlants}/>
      <Link to="/">
        <button className="introbutton">Back To DEMO</button>
        </Link>
    </main>
  );
}

export default PlantPage;
