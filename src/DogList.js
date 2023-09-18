import { Link } from "react-router-dom";
import "./DogList.css"

export default function DogList ({dogs}) {

  return(
    <div className="DogList">
      <h1>list 'o' dogs</h1>
      {dogs.map((d,i) => <Link key={i} to={`/dogs/${d.name}`}>{d.name}</Link>)}
    </div>
  )

}