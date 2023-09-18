import { useParams } from "react-router-dom"

export default function DogDetails ({dogs}) {
  const params = useParams()
  const dog = dogs.filter(d => d.name === params.name)[0]
  const dogKeys = Object.keys(dog)


  return (
    <div className="DogDetails">
      <h1> dog details </h1>
      {dogKeys.map((k, i) => <h2 key={i}>{k}: {dog[k]}</h2>)}
    </div>
  )
}