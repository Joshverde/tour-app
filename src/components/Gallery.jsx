import React, { useEffect, useState } from 'react';
import TourCard from './TourCard.jsx'



const  Gallery = ({tours,setTours, onRemove}) =>{
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(null)

    const fetchTours = async () => {
        try{
            const res = await fetch('https://www.course-api.com/react-tours-project')
            const data = await res.json()
            setTours(data) 
            setLoading(false)
        }
        catch (error) {
            setError(true) // loading data set to true
            setLoading(false) //loading data set to false
        }
    } 
    
    useEffect(() =>{
        fetchTours()
    }, [])

    if (error) {
        return <h2>Uh Oh, something went wrong</h2>
    }
    if(tours.length === 0) {
        return  <>
                    <h2>No Tours remain</h2>
                    <div className= 'refresh-button'>
                    <button onClick={fetchTours}>Refresh</button>
                    </div>
                </>
    }

    return ( 
        <section className='tour-list'>
            {tours.map((tour) => {
                return (
                    <TourCard
                        key={tour.id}
                        {...tour}
                        onRemove={onRemove}
                    />
                );
            })}
        </section>
    )
    
}


export default Gallery

