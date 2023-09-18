import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ShowColor.css"

export default function ShowColor ({colorList}) {
  const params = useParams()
  const color = colorList.filter(c => c.name === params.color)[0]
  console.log(color)
  return (
    <div className="ShowColor" style={{backgroundColor: color.value}}>
      <h1>I SEE YOU ENJOY {params.color}</h1>
      <Link to="/colors">GO BACK</Link>
    </div>
  )
}