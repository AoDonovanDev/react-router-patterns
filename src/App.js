import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate, redirect} from "react-router-dom"
import { useState } from 'react';
import DogList from "./DogList.js"
import DogDetails from "./DogDetails.js"
import ColorList from "./ColorList.js"
import ShowColor from "./ShowColor.js"
import ColorForm from "./ColorForm.js"



function App({dogs}) {

  
  const [colorList, updateList] = useState([
    { name: 'red', value: 'red'},
    { name: 'green', value: 'green'},
    { name: 'blue', value: 'blue'},
  ])

  const clickHandler = (formData, navigate) => {
    const colors = [...colorList]
    colors.push({
      name: formData.name,
      value: formData.color
    })
   
    updateList(colors)
   
    navigate('/colors')
    
  }

  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route exact path="/dogs" element= {<DogList dogs={dogs} />} />
      
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} /> } />

        <Route exact path="/colors" element={<ColorList colorList={colorList}/>}/>

        <Route path="/colors/:color" element={<ShowColor colorList={colorList}/>}/>

        <Route exact path="/colors/new" element = {<ColorForm clickHandler={clickHandler}/>} />
        
        <Route path="*" element={<Navigate to="/colors"/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
