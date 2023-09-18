import { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorList.css"


export default function ColorList ({colorList}) {

  const [colors, updateColors] = useState(colorList)

  return (
    <div className="ColorList">
      {colorList.map((c,i) => <Link key={i} to={`/colors/${c.name}`}>{c.name}</Link>)}
      <Link to="/colors/new">Add a color!</Link>
    </div>
  )
}