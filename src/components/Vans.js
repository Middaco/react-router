import { useEffect, useState } from "react"
import VanCard from "./VanCard"
import { useSearchParams } from "react-router-dom"
import './Vans.css'
export default function Vans(){
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')
    let vansToDisplay = vans.filter(van => van.type === typeFilter)
    vansToDisplay = vansToDisplay.length != 0 ? vansToDisplay : vans
    
    useEffect(() => {
        fetch('/api/vans')
            .then(response => response.json())
            .then(data => setVans(data.vans))
    }, [])

    return (
      <div>
        <h1 style={{marginLeft:'20px'}}>Explore our vans options:</h1>
        <div className="filter-container">
          <div className="filter-list">
            <button onClick={() => setSearchParams({type: "simple"})}  className={`filter-list-element simple ${typeFilter === 'simple' ? 'selected' : ''}`}>Simple</button>
            <button onClick={() => setSearchParams({type: "luxury"})} className={`filter-list-element luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}>Luxury</button>
            <button onClick={() => setSearchParams({type: "rugged"})} className={`filter-list-element rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}>Rugged</button>
          </div> 
          {
            typeFilter 
            && 
            <button onClick={() => setSearchParams({})} style={{color:"#161616"}}>Clear filters</button>
          }
          </div>
      <div className="grid-container">
        <div className="vans-grid">
          {vansToDisplay
              .map(van => {
                return <VanCard
                  id={van.id}
                  vanImgSrc={van.imageUrl}
                  vanName={van.name}
                  vanPrice={van.price}
                  type={van.type}
                  description={van.description}
                />
              }) 
            }
        </div>
      </div>
      </div>
    )
}