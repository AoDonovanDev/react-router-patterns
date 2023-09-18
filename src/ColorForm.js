import { useState } from "react";
import { useNavigate } from "react-router";
import "./ColorForm.css"



export default function ColorForm( {clickHandler} ) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    color: '#FFFFFF'

  })

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
  

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        type="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button type="button" onClick={()=>clickHandler(formData, navigate)}>Add Color</button>
    </form>
  );
}