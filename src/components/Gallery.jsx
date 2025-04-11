import React, { useEffect, useState } from 'react';
import TourCard from './TourCard.jsx';

// Gallery component to display a list of tours
const Gallery = ({ tours, setTours, onRemove }) => {
    const [loading, setLoading] = useState(true); // Tracks loading state
    const [error, setError] = useState(null); // Tracks error state

    // Fetch tours data from the API
    const fetchTours = async () => {
        try {
            const res = await fetch('https://www.course-api.com/react-tours-project');
            const data = await res.json();
            setTours(data); // Update tours state
            setLoading(false); // Stop loading after data fetch
        } catch (error) {
            setError(true); // Handle fetch error
            setLoading(false);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        fetchTours();
    }, []);

    if (error) {
        return <h2>Uh Oh, something went wrong</h2>; // Display error message
    }

    if (tours.length === 0) {
        return (
            <>
                <h2>No Tours remain</h2>
                <div className='refresh-button'>
                    <button onClick={fetchTours}>Refresh</button>
                </div>
            </>
        );
    }

    // Render list of tours
    return (
        <section className='tour-list'>
            {tours.map((tour) => (
                <TourCard
                    key={tour.id} // Unique key for each tour
                    {...tour} // Pass tour properties as props
                    onRemove={onRemove} // Handle tour removal
                />
            ))}
        </section>
    );
};

export default Gallery;
